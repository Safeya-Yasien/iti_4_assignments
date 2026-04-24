import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Bookmark {
  @Prop({ required: true })
  url!: string;

  @Prop({ required: true })
  title!: string;

  @Prop()
  description?: string;

  @Prop([String])
  tags?: string[];
}

export const BookmarkSchema = SchemaFactory.createForClass(Bookmark);
