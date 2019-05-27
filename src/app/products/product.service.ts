import { AppConsts } from '@shared/AppConsts';

import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Product, PagedResultDto } from './products.model';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) {}

  getAll(ResultDto: PagedResultDto): Observable<any> {
    // tslint:disable-next-line:max-line-length
    const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Product/GetAllProductWithProductName' + '?MaxResultCount=' + ResultDto.MaxResultCount + '&SkipCount=' + ResultDto.SkipCount;
    // console.log(apiUrls);
    return this.http.get<any>(apiUrls);
  }

  getAllProductType(ResultDto: PagedResultDto): Observable<any> {
    // tslint:disable-next-line:max-line-length
    const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/ProductType/Getall' + '?MaxResultCount=' + ResultDto.MaxResultCount + '&SkipCount=' + ResultDto.SkipCount;
    // console.log(apiUrls);
    return this.http.get<any>(apiUrls);
  }

  // getAllimpTable(): Observable<Array<ImpTable>> {
  //   return this.http.get<Array<ImpTable>>(this.IMPTABLE_API);

  // }

  // get(id: string) {
  //   return this.http.get<Implementation>(${this.IMPLEMENTATION_API}/${id});
  // }

  save(product: Product): Observable<Product> {
    const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Product/Create';
    return this.http.post<Product>(apiUrls, product);
  }

  update(product: Product): Observable<Product> {
    const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Product/Update' ;
    return this.http.put<Product>(apiUrls, product);

  }

  remove(id: number) {
    const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Product/Delete' + '?Id=' + id ;
    return this.http.delete<any>(apiUrls);
  }
}
