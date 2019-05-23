export class Batch {

  batchNo: number;
  id: number;

}
export class StockIn {

  product: string;
      date: Date;
      quantity: number;
      stocked_From: string;
      id: number;

}
export class StockOut {

  product: string;
      date: Date;
      quantity: number;
      stocked_To: string;
      id: number;

}
export class PagedResultDto {
  MaxResultCount: number;
  SkipCount: number;
}
