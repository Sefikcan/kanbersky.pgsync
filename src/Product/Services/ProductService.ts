import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "../Entities/Product";
import { ProductRepository } from "../Repositories/ProductRepository";

@Injectable()
export class ProductService {
    constructor(private readonly productRepository: ProductRepository) {}

    async findOne(id: number): Promise<Product> {
        const result = await this.productRepository.findOne({ where: { id: id } });
        if(!result){
            throw new NotFoundException("Category not found!");
        }

        return result;
    }
}