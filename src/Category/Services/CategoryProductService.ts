import { Injectable } from "@nestjs/common";
import { CategoryProductCreateRequest } from "../DTO/CategoryProductCreateRequest";
import { CategoryProduct } from "../Entities/CategoryProduct";
import { CategoryProductRepository } from "../Repositories/CategoryProductRepository";
import { CategoryService } from "./CategoryService";

@Injectable()
export class CategoryProductService {
    constructor(
        private readonly categoryProductRepository: CategoryProductRepository,
        private readonly categoryService: CategoryService,
        ) {}

    async create(categoryId: number, categoryProductCreateRequest: CategoryProductCreateRequest): Promise<CategoryProduct> {
        await this.categoryService.findOne(categoryId);
        //TODO: Valid product
        return await this.categoryProductRepository.save(categoryProductCreateRequest);
    }
}