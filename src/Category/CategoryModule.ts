import { Module } from "@nestjs/common";
import { CategoryController } from "./Controllers/CategoryController";
import { CategoryProductController } from "./Controllers/CategoryProductController";
import { CategoryProductService } from "./Services/CategoryProductService";
import { CategoryService } from "./Services/CategoryService";
import CategoryEntityProvider from './Providers/EntityProvider';
import { ProductModule } from "src/Product/ProductModule";

@Module({
    controllers: [
        CategoryController,
        CategoryProductController
    ],
    providers: [
        CategoryService,
        CategoryProductService
    ],
    imports: [
        CategoryEntityProvider,
        ProductModule,
    ]
})
export class CategoryModule {}