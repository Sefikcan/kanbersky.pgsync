import { Body, Controller, Post } from "@nestjs/common";
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import { ProductCreateRequest } from "../DTO/ProductCreateRequest";
import { ProductService } from "../Services/ProductService";

@Controller('v1/products')
@ApiTags('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post()
    @ApiCreatedResponse({ status: 201, description: 'success' })
    async create(@Body() productCreateRequest: ProductCreateRequest) {
        return this.productService.create(productCreateRequest);
    }
}