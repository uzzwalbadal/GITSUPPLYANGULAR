export class Product {

         id: number;
        name: string;
        description: string;
        productTypeId: number;

}

export class PagedResultDto {
        MaxResultCount: number;
        SkipCount: number;
}
