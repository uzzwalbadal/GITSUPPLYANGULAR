import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TransactionsService } from './transaction.service';
import { PagedResultDto, TransactionType, Transaction } from './transaction.model';
import { Customer } from '@app/customers/customers.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactionsForm: FormGroup;
  transactions: any;
  customer: Customer[];
  transactiontype: TransactionType[];
  constructor(private transactionsService: TransactionsService) { }

  ngOnInit() {
    this.getNewFormInstance();
    this.refresh();
    this.getAllTransactionType();
    this.getAllCustomer();
  }
  getAllTransactionType(): void {
    const ResultDto = new  PagedResultDto;
    console.log(ResultDto);
    ResultDto.MaxResultCount = 100;
    ResultDto.SkipCount = 0;
    this.transactionsService.getAllTransactionType(ResultDto).subscribe((result: any) => {
      this.transactiontype = result.result.items;
    });
  }
  getAllCustomer(): void {
    const ResultDto = new  PagedResultDto;
    
    ResultDto.MaxResultCount = 100;
    ResultDto.SkipCount = 0;
    this.transactionsService.getAllCustomer(ResultDto).subscribe((result: any) => {
      this.customer = result.result.items;
      console.log(this.customer);
    });
  }

  populateForm(items: Transaction) {
    this.getNewFormInstance();
    this.transactionsForm.patchValue(items);
  }
  getNewFormInstance() {
    this.transactionsForm =
    new FormGroup({
      'id':  new FormControl(),
      'name': new FormControl(),
      'amount': new FormControl(),
      'date': new FormControl(),
      'type': new FormControl(),
      'supplytransactiontypeId': new FormControl(),

  });

  }
  OnSubmit() {
    // console.log(this.productsForm);

    console.log('service called');
    const pro = new Transaction();
    const DataSaveModel = new Transaction();

    DataSaveModel.name = this.transactionsForm.controls['name'].value;
    // DataSaveModel.type = this.transactionsForm.controls['type'].value;
    DataSaveModel.amount = this.transactionsForm.controls['amount'].value;
    DataSaveModel.date = this.transactionsForm.controls['date'].value;
    DataSaveModel.type = this.transactionsForm.controls['type'].value;
    DataSaveModel.supplytransactiontypeId = this.transactionsForm.controls['supplytransactiontypeId'].value;
    console.log(DataSaveModel);



    this.transactionsService.saveTransaction(DataSaveModel)
    .subscribe(
      (params: Transaction) => {
       console.log('API response ', params);
         this.refresh();
      }
    );

  }
  refresh(): void {
    const ResultDto = new  PagedResultDto;
    ResultDto.MaxResultCount = 100;
    ResultDto.SkipCount = 0;
    this.transactionsService.getAllTransaction(ResultDto).subscribe((result: any) => {
      this.transactions = result.result.items;
      // console.log(this.products);
    });
  }
  update(): void {

    const DataSaveModel = new Transaction();
    DataSaveModel.name = this.transactionsForm.controls['name'].value;
    // DataSaveModel.type = this.transactionsForm.controls['type'].value;
    DataSaveModel.amount = this.transactionsForm.controls['amount'].value;
    DataSaveModel.date = this.transactionsForm.controls['date'].value;
    DataSaveModel.type = this.transactionsForm.controls['type'].value;
    DataSaveModel.supplytransactiontypeId = this.transactionsForm.controls['supplytransactiontypeId'].value;
    // console.log(this.products);
    console.log(DataSaveModel);
    this.transactionsService.updateTransaction(DataSaveModel).subscribe((result: any) => {
      this.transactions = result.result.items;
      this.refresh();

    });
  }

}
