import { Static, Type } from '@sinclair/typebox';

export const CreateBookmarkDto = Type.Object({
  url: Type.String({ format: 'uri' }),
  title: Type.Optional(Type.String()),
  description: Type.String(),
  tags: Type.Optional(Type.Array(Type.String())),
});

export const UpdateBookmarkDto = Type.Partial(CreateBookmarkDto);

export type CreateBookmarkDto = Static<typeof CreateBookmarkDto>;
export type UpdateBookmarkDto = Static<typeof UpdateBookmarkDto>;
