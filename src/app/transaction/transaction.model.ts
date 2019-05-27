export class Transaction {

    name: string;
      amount: number;
      date: string;
      type: string;
      supplytransactiontypeId: number;
      id: number;


}
export class TransactionType {

    public id: number;
    public  name: string;



}
export class PagedResultDto {
MaxResultCount: number;
SkipCount: number;
}
