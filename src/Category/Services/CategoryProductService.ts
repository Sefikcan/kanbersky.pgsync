import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProductService } from "../../Product/Services/ProductService";
import { CategoryProductCreateRequest } from "../DTO/CategoryProductCreateRequest";
import { CategoryProduct } from "../Entities/CategoryProduct";
import { CategoryService } from "./CategoryService";

@Injectable()
export class CategoryProductService {
    constructor(
        @InjectRepository(CategoryProduct) private readonly categoryProductRepository: Repository<CategoryProduct>,
        private readonly categoryService: CategoryService,
        private readonly productService: ProductService
        ) {}

    async create(categoryId: number, categoryProductCreateRequest: CategoryProductCreateRequest): Promise<CategoryProduct> {
        const categoryProduct = new CategoryProduct();
        categoryProduct.category = await this.categoryService.findOne(categoryId)
        categoryProduct.product = await this.productService.findOne(categoryProductCreateRequest.productId);

        return await this.categoryProductRepository.save(categoryProduct);
    }
}