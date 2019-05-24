import { ProductType } from './producttype.model';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Product, PagedResultDto } from './products.model';
import { ProductsService } from './product.service';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { getMatTooltipInvalidPositionError } from '@angular/material';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  productsForm: FormGroup;
  products: any;
  producttype: ProductType[];

constructor( private formbuilder: FormBuilder, private productService: ProductsService) { }



  ngOnInit() {

    this.getNewFormInstance();
    this.refresh();
    this.getAllProductType();



  }
  getAllProductType(): void {
    const ResultDto = new  PagedResultDto;
    console.log(ResultDto);
    ResultDto.MaxResultCount = 100;
    ResultDto.SkipCount = 0;
    this.productService.getAllProductType(ResultDto).subscribe((result: any) => {
      this.producttype = result.result.items;
    });
  }

  populateForm(items: Product) {
    this.getNewFormInstance();
    this.productsForm.patchValue(items);
  }
  onDelete(id) {
    console.log(id);
    this.productService.remove(id.id).subscribe(res => {
      console.log(res);
      this.refresh();
    });


  }

  
  onClear() {
    this.productsForm.reset();
  }

getNewFormInstance() {
  this.productsForm =
  new FormGroup({
    'id':  new FormControl(),
    'name': new FormControl(),
    'description': new FormControl(),
    'productTypeId': new FormControl(),
});

}

OnSubmit() {
  // console.log(this.productsForm);

  console.log('service called');
  const pro = new Product();
  const DataSaveModel = new Product();
  DataSaveModel.name = this.productsForm.controls['name'].value;
  DataSaveModel.description = this.productsForm.controls['description'].value;
  DataSaveModel.productTypeId = this.productsForm.controls['productTypeId'].value;
  console.log(DataSaveModel);



  this.productService.save(DataSaveModel)
  .subscribe(
    (params: Product) => {
     console.log('API response ', params);
       this.refresh();
    }
  );

}

refresh(): void {
  const ResultDto = new  PagedResultDto;
  ResultDto.MaxResultCount = 100;
  ResultDto.SkipCount = 0;
  this.productService.getAll(ResultDto).subscribe((result: any) => {
    this.products = result.result.items;
    // console.log(this.products);
  });
}

update(): void {

  const DataSaveModel = new Product();
  DataSaveModel.id = this.productsForm.controls['id'].value;
  DataSaveModel.name = this.productsForm.controls['name'].value;
  DataSaveModel.description = this.productsForm.controls['description'].value;
  DataSaveModel.productTypeId = this.productsForm.controls['productTypeId'].value;
  // console.log(this.products);
  console.log(DataSaveModel);
  this.productService.update(DataSaveModel).subscribe((result: any) => {
    this.products = result.result.items;
    this.refresh();

  });
}


}
