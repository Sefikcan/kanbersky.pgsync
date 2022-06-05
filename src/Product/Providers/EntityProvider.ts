import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "../Entities/Product";
import { ProductMeta } from "../Entities/ProductMeta";

export default TypeOrmModule.forFeature([
    Product,
    ProductMeta
]);