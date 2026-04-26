import { Module } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import { BookmarksController } from './bookmarks.controller';
import { BookmarkSchema } from './models/bookmark.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Bookmark', schema: BookmarkSchema }]),
  ],
  providers: [BookmarksService],
  controllers: [BookmarksController],
})
export class BookmarksModule {}
