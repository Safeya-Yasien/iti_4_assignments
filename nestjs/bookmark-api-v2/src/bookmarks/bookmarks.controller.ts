import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private readonly bookmarksService: BookmarksService) {}

  @Post()
  create(@Body() body: { title: string; description?: string }) {
    return this.bookmarksService.create(body);
  }

  @Get()
  findAll() {
    return this.bookmarksService.findAll();
  }
}
