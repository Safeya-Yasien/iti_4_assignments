import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bookmark } from './schemas/bookmark.schema';
import { CreateBookmarkDto, UpdateBookmarkDto } from './dto/bookmark.dto';

@Injectable()
export class BookmarksService {
  constructor(
    @InjectModel(Bookmark.name) private bookmarkModel: Model<Bookmark>,
  ) {}

  async create(dto: CreateBookmarkDto) {
    return await this.bookmarkModel.create(dto);
  }

  async findAll() {
    return await this.bookmarkModel.find().exec();
  }

  async findOne(id: string) {
    const bookmark = await this.bookmarkModel.findById(id);
    if (!bookmark) {
      throw new NotFoundException('Bookmark not found');
    }
    return bookmark;
  }

  async update(id: string, dto: UpdateBookmarkDto) {
    const updatedBookmark = await this.bookmarkModel.findByIdAndUpdate(
      id,
      dto,
      { new: true },
    );
    if (!updatedBookmark) {
      throw new NotFoundException(`Bookmark not found`);
    }
    return updatedBookmark;
  }

  async remove(id: string) {
    const deletedBookmark = await this.bookmarkModel.findByIdAndDelete(id);
    if (!deletedBookmark) {
      throw new NotFoundException(`Bookmark not found`);
    }
    return deletedBookmark;
  }
}
