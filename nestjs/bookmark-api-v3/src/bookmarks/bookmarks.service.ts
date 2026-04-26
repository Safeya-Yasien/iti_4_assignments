import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bookmark } from './models/bookmark.model';

@Injectable()
export class BookmarksService {
  constructor(
    @InjectModel('Bookmark') private readonly bookmarkModel: Model<Bookmark>,
  ) {}

  async create(bookmark: { title: string; description?: string }) {
    return this.bookmarkModel.create(bookmark);
  }

  async findAll() {
    return this.bookmarkModel.find().exec();
  }
}
