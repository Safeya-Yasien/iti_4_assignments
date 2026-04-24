import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import { CreateBookmarkDto, UpdateBookmarkDto } from './dto/bookmark.dto';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private readonly bookmarksService: BookmarksService) {}

  @Post()
  create(@Body() body: CreateBookmarkDto) {
    return this.bookmarksService.create(body);
  }

  @Get()
  findAll() {
    return this.bookmarksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookmarksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateBookmarkDto) {
    return this.bookmarksService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookmarksService.remove(id);
  }
}
