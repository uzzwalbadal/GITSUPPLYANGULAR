
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SuppliersService } from './suppliers.service';
import { PagedResultDto, Supplier } from './suppliers.model';
import { ProductType } from '@app/products/producttype.model';
import { Product } from '@app/products/products.model';
import { CustomerType } from '@app/customers/customertype.model';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  SuppliersForm: FormGroup;
  suppliers: any;
  producttype: ProductType[];
  customertype: CustomerType[];
  
  constructor( private formbuilder: FormBuilder, private suppliersService: SuppliersService) { }

  ngOnInit() {
    this.getNewFormInstance();
    this.refresh();
    // this.getAllSupply();
    this.refreshProduct();
    this.refreshCustomer();
  }
 
  populateForm(items: Supplier) {
    this.getNewFormInstance();
    this.SuppliersForm.patchValue(items);
  }
  getNewFormInstance() {
    this.SuppliersForm =
    new FormGroup({
      'id': new FormControl(),
      'product': new FormControl(),
      'suppliedTo': new FormControl(),
      'quantity': new FormControl(),
      'date': new FormControl(),
      'validity': new FormControl(),
     
  });
  }
  OnSubmit() {
    // console.log(this.productsForm);
  
    console.log('service called');
    const pro = new Supplier();
    const DataSaveModel = new Supplier();
    DataSaveModel.id = this.SuppliersForm.controls['id'].value;
    DataSaveModel.product = this.SuppliersForm.controls['product'].value;
    // DataSaveModel.type = this.SuppliersForm.controls['type'].value;
    DataSaveModel.suppliedTo = this.SuppliersForm.controls['suppliedTo'].value;
    DataSaveModel.quantity = this.SuppliersForm.controls['quantity'].value;
    DataSaveModel.date = this.SuppliersForm.controls['date'].value;
    DataSaveModel.validity = this.SuppliersForm.controls['validity'].value;
    
    console.log(DataSaveModel);
  
  
  
    this.suppliersService.saveSupplier(DataSaveModel)
    .subscribe(
      (params: Supplier) => {
       console.log('API response ', params);
         this.refresh();
      }
    );
  
  }
  refresh(): void {
    const ResultDto = new  PagedResultDto;
    ResultDto.MaxResultCount = 100;
    ResultDto.SkipCount = 0;
    this.suppliersService.getAllSupplier(ResultDto).subscribe((result: any) => {
      this.suppliers = result.result.items;
      // console.log(this.products);
    });
  }
  refreshProduct(): void {
    const ResultDto = new  PagedResultDto;
    ResultDto.MaxResultCount = 100;
    ResultDto.SkipCount = 0;
    this.suppliersService.getAllProduct(ResultDto).subscribe((result: any) => {
      this.producttype = result.result.items;
      console.log(this.producttype);
    });
  }
  refreshCustomer(): void {
    const ResultDto = new  PagedResultDto;
    ResultDto.MaxResultCount = 100;
    ResultDto.SkipCount = 0;
    this.suppliersService.getAllCustomer(ResultDto).subscribe((result: any) => {
      this.customertype = result.result.items;
      console.log(this.customertype);
    });
  }
  update(): void {

    const DataSaveModel = new Supplier();
    DataSaveModel.product = this.SuppliersForm.controls['product'].value;
    // DataSaveModel.type = this.SuppliersForm.controls['type'].value;
    DataSaveModel.suppliedTo = this.SuppliersForm.controls['suppliedTo'].value;
    DataSaveModel.quantity = this.SuppliersForm.controls['quantity'].value;
    DataSaveModel.date = this.SuppliersForm.controls['date'].value;
    DataSaveModel.validity = this.SuppliersForm.controls['validity'].value;
    // console.log(this.products);
    console.log(DataSaveModel);
    this.suppliersService.updateSupplier(DataSaveModel).subscribe((result: any) => {
      this.suppliers = result.result.items;
      this.refresh();
  
    });
  }

}
