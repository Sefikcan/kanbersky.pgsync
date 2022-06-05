import { ApiProperty } from "@nestjs/swagger";
import { ProductMetaCreateRequest } from "./ProductMetaCreateRequest";

export class ProductCreateRequest {
    @ApiProperty()
    name: string;

    @ApiProperty( { type: () => ProductMetaCreateRequest, isArray: true })
    metas: ProductMetaCreateRequest[];
}