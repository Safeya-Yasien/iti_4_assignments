import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IBookmark } from './models/bookmark.model';

@Injectable()
export class BookmarksService {
  constructor(
    @Inject('BOOKMARK_MODEL') private bookmarkModel: Model<IBookmark>,
  ) {}

  async create(bookmark: { title: string; description?: string }) {
    return this.bookmarkModel.create(bookmark);
  }

  async findAll() {
    return this.bookmarkModel.find().exec();
  }
}
