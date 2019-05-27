import { Complaints, PagedResultDto } from './documents.model';
import { Injectable } from '@angular/core';

import { AppConsts } from '@shared/AppConsts';

import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';





@Injectable()
export class ComplaintsService {

    constructor(private http: HttpClient) {}

    getAllComplaint(ResultDto: PagedResultDto): Observable<any> {
      // tslint:disable-next-line:max-line-length
      const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Complaints/GetAll' + '?MaxResultCount=' + ResultDto.MaxResultCount + '&SkipCount=' + ResultDto.SkipCount;
      // console.log(apiUrls);
      return this.http.get<any>(apiUrls);
    }
    getAllCustomer(ResultDto: PagedResultDto): Observable<any> {
      // tslint:disable-next-line:max-line-length
      const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Customer/GetAll' + '?MaxResultCount=' + ResultDto.MaxResultCount + '&SkipCount=' + ResultDto.SkipCount;
      // console.log(apiUrls);
      return this.http.get<any>(apiUrls);
    }



    saveComplaint(complaints: Complaints): Observable<Complaints> {
      const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Complaints/Create';
      return this.http.post<Complaints>(apiUrls, complaints);
    }





    updateCustomer(complaints: Complaints): Observable<Complaints> {
      const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Complaints/Update' ;
      return this.http.put<Complaints>(apiUrls, complaints);



  //   remove(id: number) {
  //     const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Product/Delete' + '?Id=' + id ;
  //     return this.http.delete<any>(apiUrls);
  //   }
  }
}
