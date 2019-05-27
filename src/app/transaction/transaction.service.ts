import { Injectable } from '@angular/core';

import { AppConsts } from '@shared/AppConsts';

import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction, PagedResultDto } from './transaction.model';






@Injectable()
export class TransactionsService {

    constructor(private http: HttpClient) {}

    getAllTransaction(ResultDto: PagedResultDto): Observable<any> {
      // tslint:disable-next-line:max-line-length
      const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/SupplyTransaction/GetAll' + '?MaxResultCount=' + ResultDto.MaxResultCount + '&SkipCount=' + ResultDto.SkipCount;
      // console.log(apiUrls);
      return this.http.get<any>(apiUrls);
    }
    getAllCustomer(ResultDto: PagedResultDto): Observable<any> {
        // tslint:disable-next-line:max-line-length
        const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Customer/GetAll' + '?MaxResultCount=' + ResultDto.MaxResultCount + '&SkipCount=' + ResultDto.SkipCount;
        // console.log(apiUrls);
        return this.http.get<any>(apiUrls);
      }
    getAllTransactionType(ResultDto: PagedResultDto): Observable<any> {
        // tslint:disable-next-line:max-line-length
        const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/SupplyTransactionType/GetAll' + '?MaxResultCount=' + ResultDto.MaxResultCount + '&SkipCount=' + ResultDto.SkipCount;
        // console.log(apiUrls);
        return this.http.get<any>(apiUrls);
      }



    saveTransaction(transaction: Transaction): Observable<Transaction> {
      const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/SupplyTransaction/Create';
      return this.http.post<Transaction>(apiUrls, transaction);
    }





    updateTransaction(transaction: Transaction): Observable<Transaction> {
      const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/SupplyTransaction/Update' ;
      return this.http.put<Transaction>(apiUrls, transaction);



  //   remove(id: number) {
  //     const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Product/Delete' + '?Id=' + id ;
  //     return this.http.delete<any>(apiUrls);
  //   }
  }
}
