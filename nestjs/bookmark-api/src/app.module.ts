import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    BookmarksModule,
    MongooseModule.forRoot(
      'mongodb+srv://gamesApp:gamesApp123@cluster0.zjdjiod.mongodb.net/?appName=Cluster0',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
