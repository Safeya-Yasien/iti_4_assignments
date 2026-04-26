import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),

        connectionFactory: (connection: Connection) => {
          connection.on('connected', () => console.log('Mongodb connected'));

          connection.on('error', (error) =>
            console.log('MongoDB Error:', error),
          );

          return connection;
        },
      }),
      inject: [ConfigService],
    }),
    BookmarksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
