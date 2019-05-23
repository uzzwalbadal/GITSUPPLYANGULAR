export class Customer {

        public id: number;
        public  name: string;
        public type: string;
        // public expiryDate: Date;
        // public category: number;
        public location: string;
        public contact: number;
        customerTypeId: number;


}
export class PagedResultDto {
    MaxResultCount: number;
    SkipCount: number;
}
