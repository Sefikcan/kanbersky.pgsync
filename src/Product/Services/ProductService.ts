import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProductCreateRequest } from "../DTO/ProductCreateRequest";
import { Product } from "../Entities/Product";

@Injectable()
export class ProductService {
    constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>) {}

    async findOne(id: number): Promise<Product> {
        const result = await this.productRepository.findOne({ where: { id: id } });
        if(!result){
            throw new NotFoundException("Category not found!");
        }

        return result;
    }

    async create(productCreateRequest: ProductCreateRequest): Promise<Product> {
        return await this.productRepository.save(productCreateRequest);
    }
}