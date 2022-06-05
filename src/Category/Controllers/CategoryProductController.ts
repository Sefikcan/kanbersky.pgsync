import { 
    Body, 
    Controller,
    Param, 
    ParseIntPipe, 
    Post 
} from "@nestjs/common";
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import { CategoryProductCreateRequest } from "../DTO/CategoryProductCreateRequest";
import { CategoryProductService } from "../Services/CategoryProductService";

@Controller('v1/categories')
@ApiTags('categories')
export class CategoryProductController {
    constructor(private readonly categoryProductService: CategoryProductService) {}

    @Post(':id')
    @ApiCreatedResponse({ status: 201, description: 'success' })
    async create(
        @Param('id', ParseIntPipe) id: number,
        @Body() categoryProductCreateRequest: CategoryProductCreateRequest) {
        return this.categoryProductService.create(id, categoryProductCreateRequest);
    }
}