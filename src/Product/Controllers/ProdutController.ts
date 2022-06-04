import { Controller } from "@nestjs/common";
import { ProductService } from "../Services/ProductService";

@Controller('v1/products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}
}