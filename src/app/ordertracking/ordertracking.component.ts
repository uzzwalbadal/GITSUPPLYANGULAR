import { Customer } from '@app/customers/customers.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OrderTrackingService } from './ordertracking.service';
import { PagedResultDto, OrderTracking } from './ordertracking.model';

@Component({
  selector: 'app-ordertracking',
  templateUrl: './ordertracking.component.html',
  styleUrls: ['./ordertracking.component.css']
})
export class OrdertrackingComponent implements OnInit {
  ordertrackingsForm: FormGroup;
  ordertrackings: any;
  customer:Customer[];
  constructor(private orderTrackingService: OrderTrackingService) { }

  ngOnInit() {
    this.getNewFormInstance();
    this.refresh();
    this.getAllCustomer();

    this.getAllOrderTracking();
  }
  getAllOrderTracking(): void {
    const ResultDto = new  PagedResultDto;
    
    ResultDto.MaxResultCount = 100;
    ResultDto.SkipCount = 0;
    this.orderTrackingService.getAllOrderTracking(ResultDto).subscribe((result: any) => {
      this.ordertrackings = result.result.items;
      console.log(this.ordertrackings);
    });
  }
  getAllCustomer(): void {
    const ResultDto = new  PagedResultDto;
    
    ResultDto.MaxResultCount = 100;
    ResultDto.SkipCount = 0;
    this.orderTrackingService.getAllCustomer(ResultDto).subscribe((result: any) => {
      this.customer = result.result.items;
      console.log(this.ordertrackings);
    });
  }
  getNewFormInstance() {
    this.ordertrackingsForm =
    new FormGroup({
      'id':  new FormControl(),
      'quantity': new FormControl(),
      'orderedBy': new FormControl(),
      'date': new FormControl(),
      'validity': new FormControl(),
      

  });

  }
  populateForm(items: OrderTracking) {
    this.getNewFormInstance();
    this.ordertrackingsForm.patchValue(items);
  }
  OnSubmit() {
    // console.log(this.productsForm);

    console.log('service called');
    const pro = new OrderTracking();
    const DataSaveModel = new OrderTracking();

    DataSaveModel.quantity = this.ordertrackingsForm.controls['quantity'].value;
    // DataSaveModel.type = this.ordertrackingsForm.controls['type'].value;
    DataSaveModel.orderedBy = this.ordertrackingsForm.controls['orderedBy'].value;
    DataSaveModel.date = this.ordertrackingsForm.controls['date'].value;
    DataSaveModel.validity = this.ordertrackingsForm.controls['validity'].value;

    console.log(DataSaveModel);



    this.orderTrackingService.saveOrderTracking(DataSaveModel)
    .subscribe(
      (params: OrderTracking) => {
       console.log('API response ', params);
         this.refresh();
      }
    );

  }
  refresh(): void {
    const ResultDto = new  PagedResultDto;
    ResultDto.MaxResultCount = 100;
    ResultDto.SkipCount = 0;
    this.orderTrackingService.getAllOrderTracking(ResultDto).subscribe((result: any) => {
      this.ordertrackings = result.result.items;
      // console.log(this.products);
    });
  }
  update(): void {

    const DataSaveModel = new OrderTracking();
    DataSaveModel.quantity = this.ordertrackingsForm.controls['quantity'].value;
    // DataSaveModel.type = this.ordertrackingsForm.controls['type'].value;
    DataSaveModel.orderedBy = this.ordertrackingsForm.controls['orderedBy'].value;
    DataSaveModel.date = this.ordertrackingsForm.controls['date'].value;
    DataSaveModel.validity = this.ordertrackingsForm.controls['validity'].value;
    // console.log(this.products);
    console.log(DataSaveModel);
    this.orderTrackingService.updateOrderTracking(DataSaveModel).subscribe((result: any) => {
      this.ordertrackings = result.result.items;
      this.refresh();

    });
  }

}
