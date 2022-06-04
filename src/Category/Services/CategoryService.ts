import { Injectable } from "@nestjs/common";
import { CreateCategoryRequest } from "../DTO/CreateCategoryRequest";
import { Category } from "../Entities/Category";
import { CategoryRepository } from "../Repositories/CategoryRepository";

@Injectable()
export class CategoryService {
    constructor(private readonly categoryRepository: CategoryRepository) {}

    async create(createCategoryRequest: CreateCategoryRequest): Promise<Category> {
        return await this.categoryRepository.save(createCategoryRequest);
    }
}