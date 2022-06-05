import { ApiProperty } from "@nestjs/swagger";

export class ProductMetaCreateRequest {
    @ApiProperty()
    lang: string;

    @ApiProperty()
    name: string;
}