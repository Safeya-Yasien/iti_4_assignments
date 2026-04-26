import { DynamicModule, Module, Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { mongoProvider } from './providers/mongo.provider';
import { Connection, Schema } from 'mongoose';

@Module({
  providers: [
    {
      provide: 'MONGO_CONNECTION',
      useFactory: async (configService: ConfigService) => {
        const uri =
          configService.get<string>('MONGO_URI') ||
          'mongodb://localhost:27017/bookmarks';

        return await mongoProvider(uri);
      },
      inject: [ConfigService],
    },
  ],
  exports: ['MONGO_CONNECTION'],
})
export class DbModule {
  static forFeature(
    models: { modelName: string; schema: Schema }[],
  ): DynamicModule {
    const providers: Provider[] = models.map(({ modelName, schema }) => ({
      provide: `${modelName.toUpperCase()}_MODEL`,
      useFactory: (connection: Connection) => {
        return connection.model(modelName, schema);
      },
      inject: ['MONGO_CONNECTION'],
    }));

    return {
      module: DbModule,
      providers,
      exports: providers,
    };
  }
}
