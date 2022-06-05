import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProductCreateRequest } from "../DTO/ProductCreateRequest";
import { Product } from "../Entities/Product";
import { ProductMeta } from "../Entities/ProductMeta";

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
        let productMetas = new Array<ProductMeta>();
        
        if (productCreateRequest.metas && productCreateRequest.metas.length > 0) {
            for(const meta of productCreateRequest.metas) {
                let productMeta = new ProductMeta();
                productMeta.lang = meta.lang;
                productMeta.name = meta.name;
                productMetas.push(productMeta);
            }
        }

        const product = new Product(productMetas);
        product.name = productCreateRequest.name;

        return await this.productRepository.save(product);
    }
}