import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "../Entities/Product";
import { ProductRepository } from "../Repositories/ProductRepository";

export default TypeOrmModule.forFeature([
    Product,

    ProductRepository
]);