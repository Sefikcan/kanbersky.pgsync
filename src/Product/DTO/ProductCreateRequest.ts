import { ApiProperty } from "@nestjs/swagger";

export class ProductCreateRequest {
    @ApiProperty()
    name: string;
}