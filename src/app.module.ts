import { Module } from '@nestjs/common';
import ConfigurationModule from './Common/Configuration/ConfigurationModule';
import DatabaseModule from './Common/Database/DatabaseModule';
import CategoryEntityProvider from './Category/Providers/EntityProvider';
import ProductEntityProvider from './Product/Providers/EntityProvider';
import { CategoryController } from './Category/Controllers/CategoryController';
import { CategoryService } from './Category/Services/CategoryService';
import { ProductController } from './Product/Controllers/ProdutController';
import { ProductService } from './Product/Services/ProductService';

@Module({
  imports: [
    ConfigurationModule,
    DatabaseModule,
    CategoryEntityProvider,
    ProductEntityProvider
  ],
  controllers: [
    CategoryController,
    ProductController
  ],
  providers: [
    CategoryService,
    ProductService
  ],
})
export class AppModule {}
