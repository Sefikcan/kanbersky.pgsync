import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryRequest {
    @ApiProperty()
    name: string;
}