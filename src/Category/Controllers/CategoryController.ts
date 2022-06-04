import { Body, Controller, Post } from "@nestjs/common";
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import { CreateCategoryRequest } from "../DTO/CreateCategoryRequest";
import { CategoryService } from "../Services/CategoryService";

@Controller('v1/categories')
@ApiTags('categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Post()
    @ApiCreatedResponse({ status: 201, description: 'success' })
    async create(@Body() createCategoryRequest: CreateCategoryRequest) {
        return this.categoryService.create(createCategoryRequest);
    }
}