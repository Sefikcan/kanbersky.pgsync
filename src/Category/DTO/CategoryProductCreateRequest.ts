import { ApiProperty } from "@nestjs/swagger";

export class CategoryProductCreateRequest {
    categoryId: number;

    @ApiProperty()
    productId: number;
}