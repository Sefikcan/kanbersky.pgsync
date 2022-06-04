import { Injectable } from "@nestjs/common";
import { ProductService } from "../../Product/Services/ProductService";
import { CategoryProductCreateRequest } from "../DTO/CategoryProductCreateRequest";
import { CategoryProduct } from "../Entities/CategoryProduct";
import { CategoryProductRepository } from "../Repositories/CategoryProductRepository";
import { CategoryService } from "./CategoryService";

@Injectable()
export class CategoryProductService {
    constructor(
        private readonly categoryProductRepository: CategoryProductRepository,
        private readonly categoryService: CategoryService,
        private readonly productService: ProductService
        ) {}

    async create(categoryId: number, categoryProductCreateRequest: CategoryProductCreateRequest): Promise<CategoryProduct> {
        await this.categoryService.findOne(categoryId);
        await this.productService.findOne(categoryProductCreateRequest.productId);
        return await this.categoryProductRepository.save(categoryProductCreateRequest);
    }
}