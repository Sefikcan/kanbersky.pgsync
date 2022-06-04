import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "../Entities/Category";
import { CategoryProduct } from "../Entities/CategoryProduct";
import { CategoryProductRepository } from "../Repositories/CategoryProductRepository";
import { CategoryRepository } from "../Repositories/CategoryRepository";

export default TypeOrmModule.forFeature([
    Category,
    CategoryProduct,

    CategoryRepository,
    CategoryProductRepository
]);