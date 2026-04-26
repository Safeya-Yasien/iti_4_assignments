import { Module } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import { DbModule } from 'src/db/db.module';
import { BookmarksController } from './bookmarks.controller';
import { BookmarkSchema } from './models/bookmark.model';

@Module({
  imports: [
    DbModule.forFeature([{ modelName: 'Bookmark', schema: BookmarkSchema }]),
  ],
  providers: [BookmarksService],
  controllers: [BookmarksController],
})
export class BookmarksModule {}
