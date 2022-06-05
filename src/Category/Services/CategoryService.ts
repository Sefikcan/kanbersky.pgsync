import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCategoryRequest } from "../DTO/CategoryCreateRequest";
import { Category } from "../Entities/Category";

@Injectable()
export class CategoryService {
    constructor(@InjectRepository(Category) private readonly categoryRepository: Repository<Category>) {}

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