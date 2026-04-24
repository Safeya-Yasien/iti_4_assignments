import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bookmark } from './schemas/bookmark.schema';
import { CreateBookmarkDto, UpdateBookmarkDto } from './dto/bookmark.dto';

@Injectable()
export class BookmarksService {
  constructor(
    @InjectModel(Bookmark.name) private bookmarkModel: Model<Bookmark>,
  ) {}

  create(dto: CreateBookmarkDto) {
    return this.bookmarkModel.create(dto);
  }

  findAll() {
    return this.bookmarkModel.find().exec();
  }

  findOne(id: string) {
    return this.bookmarkModel.findById(id);
  }

  update(id: string, dto: UpdateBookmarkDto) {
    return this.bookmarkModel.findByIdAndUpdate(id, dto, { new: true });
  }

  remove(id: string) {
    return this.bookmarkModel.findByIdAndDelete(id);
  }
}
