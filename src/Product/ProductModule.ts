import { Module } from "@nestjs/common";
import { ProductController } from "./Controllers/ProdutController";
import { ProductService } from "./Services/ProductService";
import ProductEntityProvider from './Providers/EntityProvider';

@Module({
    controllers: [
        ProductController
    ],
    providers: [
        ProductService
    ],
    imports: [
        ProductEntityProvider
    ],
    exports: [
        ProductService
    ]
})
export class ProductModule {}