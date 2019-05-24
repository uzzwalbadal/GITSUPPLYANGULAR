import { AppConsts } from '@shared/AppConsts';

import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { PagedResultDto, Batch, StockIn, StockOut } from './stockinventory.model';


@Injectable()
export class StocksService {

  constructor(private http: HttpClient) {}

  getAllBatch(ResultDto: PagedResultDto): Observable<any> {
    // tslint:disable-next-line:max-line-length
    const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Batch/GetAll' + '?MaxResultCount=' + ResultDto.MaxResultCount + '&SkipCount=' + ResultDto.SkipCount;
    // console.log(apiUrls);
    return this.http.get<any>(apiUrls);
  }

  getAllStockIn(ResultDto: PagedResultDto): Observable<any> {
    // tslint:disable-next-line:max-line-length
    const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/StockIn/GetAll' + '?MaxResultCount=' + ResultDto.MaxResultCount + '&SkipCount=' + ResultDto.SkipCount;
    // console.log(apiUrls);
    return this.http.get<any>(apiUrls);
  }

  getAllStockOut(ResultDto: PagedResultDto): Observable<any> {
    // tslint:disable-next-line:max-line-length
    const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/StockOut/GetAll' + '?MaxResultCount=' + ResultDto.MaxResultCount + '&SkipCount=' + ResultDto.SkipCount;
    // console.log(apiUrls);
    return this.http.get<any>(apiUrls);
  }
  // getAllimpTable(): Observable<Array<ImpTable>> {
  //   return this.http.get<Array<ImpTable>>(this.IMPTABLE_API);

  // }

  // get(id: string) {
  //   return this.http.get<Implementation>(${this.IMPLEMENTATION_API}/${id});
  // }

  saveBatch(batch: Batch): Observable<Batch> {
    const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Batch/Create';
    return this.http.post<Batch>(apiUrls, batch);
  }

  saveStockIn(stockIn: StockIn): Observable<StockIn> {
    const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/StockIn/Create';
    return this.http.post<StockIn>(apiUrls, stockIn);
  }

  saveStockOut(stockOut: StockOut): Observable<StockOut> {
    const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/StockOut/Create';
    return this.http.post<StockOut>(apiUrls, stockOut);
  }

  updateBatch(batch: Batch): Observable<Batch> {
    const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Batch/Update' ;
    return this.http.put<Batch>(apiUrls, batch);

  }

  updateStockIn(stockIn: StockIn): Observable<StockIn> {
    const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/StockIn/Update' ;
    return this.http.put<StockIn>(apiUrls, stockIn);

  }
  updateStockOut(stockOut: StockOut): Observable<StockOut> {
    const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/StockOut/Update' ;
    return this.http.put<StockOut>(apiUrls, stockOut);

  }

//   remove(id: number) {
//     const apiUrls = AppConsts.remoteServiceBaseUrl + '/api/services/app/Product/Delete' + '?Id=' + id ;
//     return this.http.delete<any>(apiUrls);
//   }
}
