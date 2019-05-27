import { Injectable } from '@angular/core';

import { AppConsts } from '@shared/AppConsts';

import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderTracking, PagedResultDto } from './ordertracking.model';






@Injectable()
export class OrderTrackingService {

    constructor(private http: HttpClient) {}

    getAllOrderTracking(ResultDto: PagedResultDto): Observable<any> {
      // tslint:disable-next-line:max-line-length
      const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/OrderTracking/GetAll' + '?MaxResultCount=' + ResultDto.MaxResultCount + '&SkipCount=' + ResultDto.SkipCount;
      // console.log(apiUrls);
      return this.http.get<any>(apiUrls);
    }
    getAllCustomer(ResultDto: PagedResultDto): Observable<any> {
        // tslint:disable-next-line:max-line-length
        const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Customer/GetAll' + '?MaxResultCount=' + ResultDto.MaxResultCount + '&SkipCount=' + ResultDto.SkipCount;
        // console.log(apiUrls);
        return this.http.get<any>(apiUrls);
      }




    saveOrderTracking(ordertracking: OrderTracking): Observable<OrderTracking> {
      const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/OrderTracking/Create';
      return this.http.post<OrderTracking>(apiUrls, ordertracking);
    }





    updateOrderTracking(ordertracking: OrderTracking): Observable<OrderTracking> {
      const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/OrderTracking/Update' ;
      return this.http.put<OrderTracking>(apiUrls, ordertracking);



  //   remove(id: number) {
  //     const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Product/Delete' + '?Id=' + id ;
  //     return this.http.delete<any>(apiUrls);
  //   }
  }
}
