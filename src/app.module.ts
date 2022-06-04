import { Module } from '@nestjs/common';
import ConfigurationModule from './Common/Configuration/ConfigurationModule';
import DatabaseModule from './Common/Database/DatabaseModule';
import CategoryEntityProvider from './Category/Providers/EntityProvider';
import { CategoryController } from './Category/Controllers/CategoryController';
import { CategoryService } from './Category/Services/CategoryService';

@Module({
  imports: [
    ConfigurationModule,
    DatabaseModule,
    CategoryEntityProvider,
  ],
  controllers: [
    CategoryController
  ],
  providers: [
    CategoryService
  ],
})
export class AppModule {}
