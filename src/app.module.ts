import { Module } from '@nestjs/common';
import { CategoryModule } from './Category/CategoryModule';
import ConfigurationModule from './Common/Configuration/ConfigurationModule';
import DatabaseModule from './Common/Database/DatabaseModule';
import { ProductModule } from './Product/ProductModule';

@Module({
  imports: [
    ConfigurationModule,
    DatabaseModule,
    CategoryModule,
    ProductModule,
  ]
})
export class AppModule {}
