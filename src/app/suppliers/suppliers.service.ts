
import { Injectable } from '@angular/core';

import { AppConsts } from '@shared/AppConsts';

import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supplier, PagedResultDto } from './suppliers.model';






@Injectable()
export class SuppliersService {

    constructor(private http: HttpClient) {}

    getAllSupplier(ResultDto: PagedResultDto): Observable<any> {
      // tslint:disable-next-line:max-line-length
      const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Supply/GetAll' + '?MaxResultCount=' + ResultDto.MaxResultCount + '&SkipCount=' + ResultDto.SkipCount;
      // console.log(apiUrls);
      return this.http.get<any>(apiUrls);
    }
    getAllProduct(ResultDto: PagedResultDto): Observable<any> {
      // tslint:disable-next-line:max-line-length
      const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Product/GetAllProductWithProductName' + '?MaxResultCount=' + ResultDto.MaxResultCount + '&SkipCount=' + ResultDto.SkipCount;
      // console.log(apiUrls);
      return this.http.get<any>(apiUrls);
    }
    getAllCustomer(ResultDto: PagedResultDto): Observable<any> {
      // tslint:disable-next-line:max-line-length
      const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Customer/GetAll' + '?MaxResultCount=' + ResultDto.MaxResultCount + '&SkipCount=' + ResultDto.SkipCount;
      // console.log(apiUrls);
      return this.http.get<any>(apiUrls);
    }




    saveSupplier(supplier: Supplier): Observable<Supplier> {
      const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Supply/Create';
      return this.http.post<Supplier>(apiUrls, supplier);
    }





    updateSupplier(supplier: Supplier): Observable<Supplier> {
      const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Supply/Update' ;
      return this.http.put<Supplier>(apiUrls, supplier);



  //   remove(id: number) {
  //     const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Product/Delete' + '?Id=' + id ;
  //     return this.http.delete<any>(apiUrls);
  //   }
  }
}
