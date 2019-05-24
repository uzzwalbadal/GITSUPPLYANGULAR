
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CustomerType, PagedResultDto } from './customertype.model';
import { CustomersService } from './customer.service';
import { Customer } from './customers.model';



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customersForm: FormGroup;
  customers: any;
  customertype: CustomerType[];

  constructor(private formbuilder: FormBuilder, private customerService: CustomersService) { }

  ngOnInit() {
    this.getNewFormInstance();
    this.refresh();
    this.getAllCustomerType();
  }
  getAllCustomerType(): void {
    const ResultDto = new  PagedResultDto;
    console.log(ResultDto);
    ResultDto.MaxResultCount = 100;
    ResultDto.SkipCount = 0;
    this.customerService.getAllCustomerType(ResultDto).subscribe((result: any) => {
      this.customertype = result.result.items;
    });
  }
  populateForm(items: Customer) {
    this.getNewFormInstance();
    this.customersForm.patchValue(items);
  }
  onClear() {
    this.customersForm.reset();
  }
  getNewFormInstance() {
    this.customersForm =
    new FormGroup({
      'id':  new FormControl(),
      'name': new FormControl(),
      'type': new FormControl(),
      'location': new FormControl(),
      'contact': new FormControl(),
      'customerTypeId': new FormControl(),

  });

  }

  OnSubmit() {
    // console.log(this.productsForm);

    console.log('service called');
    const pro = new Customer();
    const DataSaveModel = new Customer();

    DataSaveModel.name = this.customersForm.controls['name'].value;
    // DataSaveModel.type = this.customersForm.controls['type'].value;
    DataSaveModel.location = this.customersForm.controls['location'].value;
    DataSaveModel.contact = this.customersForm.controls['contact'].value;
    DataSaveModel.customerTypeId = this.customersForm.controls['customerTypeId'].value;
    console.log(DataSaveModel);



    this.customerService.saveCustomer(DataSaveModel)
    .subscribe(
      (params: Customer) => {
       console.log('API response ', params);
         this.refresh();
      }
    );

  }

  refresh(): void {
    const ResultDto = new  PagedResultDto;
    ResultDto.MaxResultCount = 100;
    ResultDto.SkipCount = 0;
    this.customerService.getAllCustomer(ResultDto).subscribe((result: any) => {
      this.customers = result.result.items;
      // console.log(this.products);
    });
  }

  update(): void {

    const DataSaveModel = new Customer();
    DataSaveModel.name = this.customersForm.controls['name'].value;
    // DataSaveModel.type = this.customersForm.controls['type'].value;
    DataSaveModel.location = this.customersForm.controls['location'].value;
    DataSaveModel.contact = this.customersForm.controls['contact'].value;
    DataSaveModel.customerTypeId = this.customersForm.controls['customerTypeId'].value;
    // console.log(this.products);
    console.log(DataSaveModel);
    this.customerService.updateCustomer(DataSaveModel).subscribe((result: any) => {
      this.customers = result.result.items;
      this.refresh();

    });
  }
}
