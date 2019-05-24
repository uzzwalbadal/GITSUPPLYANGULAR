import { Complaints, PagedResultDto } from './documents.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ComplaintsService } from './complaint.service';
import { Customer } from '@app/customers/customers.model';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  complaintsForm: FormGroup;
  complaints:any;
  customer: Customer[];

  constructor(private complaintsService: ComplaintsService) { }

  ngOnInit() {
    this.getNewFormInstance();
    this.refresh();
    this.refreshCustomer();
  }
  populateForm(items: Complaints) {
    this.getNewFormInstance();
    this.complaintsForm.patchValue(items);
  }
  getNewFormInstance() {
    this.complaintsForm =
    new FormGroup({
      'id': new FormControl(),
      'number': new FormControl(),
      'complain': new FormControl(),
      'date': new FormControl(),
      'complainTo': new FormControl(),
      'address': new FormControl(),
      'status': new FormControl(),
     
  });
  }
  OnSubmit() {
    // console.log(this.productsForm);
  
    console.log('service called');
    const pro = new Complaints();
    const DataSaveModel = new Complaints();
    // DataSaveModel.id = this.complaintsForm.controls['id'].value;
    DataSaveModel.number = this.complaintsForm.controls['number'].value;
    // DataSaveModel.type = this.complaintsForm.controls['type'].value;
    DataSaveModel.complain = this.complaintsForm.controls['complain'].value;
    DataSaveModel.date = this.complaintsForm.controls['date'].value;
    DataSaveModel.address = this.complaintsForm.controls['address'].value;
    DataSaveModel.complainTo = this.complaintsForm.controls['complainTo'].value;
    DataSaveModel.status = this.complaintsForm.controls['status'].value;
    
    console.log(DataSaveModel);
  
  
  
    this.complaintsService.saveComplaint(DataSaveModel)
    .subscribe(
      (params: Complaints) => {
       console.log('API response ', params);
         this.refresh();
      }
    );
  
  }
  refresh(): void {
    const ResultDto = new  PagedResultDto;
    ResultDto.MaxResultCount = 100;
    ResultDto.SkipCount = 0;
    this.complaintsService.getAllComplaint(ResultDto).subscribe((result: any) => {
      this.complaints = result.result.items;
      // console.log(this.products);
    });
  }
  refreshCustomer(): void {
    const ResultDto = new  PagedResultDto;
    ResultDto.MaxResultCount = 100;
    ResultDto.SkipCount = 0;
    this.complaintsService.getAllCustomer(ResultDto).subscribe((result: any) => {
      this.customer = result.result.items;
      console.log(this.customer);
    });
  }

}
