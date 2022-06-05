import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "../Entities/Category";
import { CategoryProduct } from "../Entities/CategoryProduct";

export default TypeOrmModule.forFeature([
    Category,
    CategoryProduct,
]);