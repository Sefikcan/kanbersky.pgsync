import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateCategoryRequest } from "../DTO/CategoryCreateRequest";
import { Category } from "../Entities/Category";
import { CategoryRepository } from "../Repositories/CategoryRepository";

@Injectable()
export class CategoryService {
    constructor(private readonly categoryRepository: CategoryRepository) {}

    async findOne(id: number): Promise<Category> {
        const result = await this.categoryRepository.findOne({ where: { id: id } });
        if(!result){
            throw new NotFoundException("Category not found!");
        }

        return result;
    }

    async create(createCategoryRequest: CreateCategoryRequest): Promise<Category> {
        return await this.categoryRepository.save(createCategoryRequest);
    }
}