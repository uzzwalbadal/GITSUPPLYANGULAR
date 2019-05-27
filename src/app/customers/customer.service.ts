import { Injectable } from '@angular/core';

import { AppConsts } from '@shared/AppConsts';

import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { PagedResultDto, Customer } from './customers.model';



@Injectable()
export class CustomersService {

    constructor(private http: HttpClient) {}

    getAllCustomer(ResultDto: PagedResultDto): Observable<any> {
      // tslint:disable-next-line:max-line-length
      const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Customer/GetAll' + '?MaxResultCount=' + ResultDto.MaxResultCount + '&SkipCount=' + ResultDto.SkipCount;
      // console.log(apiUrls);
      return this.http.get<any>(apiUrls);
    }
    getAllCustomerType(ResultDto: PagedResultDto): Observable<any> {
        // tslint:disable-next-line:max-line-length
        const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/CustomerType/Getall' + '?MaxResultCount=' + ResultDto.MaxResultCount + '&SkipCount=' + ResultDto.SkipCount;
        // console.log(apiUrls);
        return this.http.get<any>(apiUrls);
      }



    saveCustomer(customer: Customer): Observable<Customer> {
      const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Customer/Create';
      return this.http.post<Customer>(apiUrls, customer);
    }





    updateCustomer(customer: Customer): Observable<Customer> {
      const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Customer/Update' ;
      return this.http.put<Customer>(apiUrls, customer);



  //   remove(id: number) {
  //     const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Product/Delete' + '?Id=' + id ;
  //     return this.http.delete<any>(apiUrls);
  //   }
  }
}
