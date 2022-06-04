import { Injectable } from "@nestjs/common";
import { ProductRepository } from "../Repositories/ProductRepository";

@Injectable()
export class ProductService {
    constructor(private readonly productRepository: ProductRepository) {}
}