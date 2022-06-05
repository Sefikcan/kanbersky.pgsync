import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import ConfigurationModule from "../Configuration/ConfigurationModule";

export default TypeOrmModule.forRootAsync({
    imports: [
      ConfigurationModule
    ],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      synchronize: false,
      host: configService.get('DB_HOST'),
      port: Number(configService.get('DB_PORT')),
      username: configService.get('DB_USERNAME'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_DATABASE'),
      entities: ['dist/**/*.entity.{ts,js}'],
      autoLoadEntities: true,
    }),
    inject: [ ConfigService ]
  });