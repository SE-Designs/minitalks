import { getMininoteById } from "~/server/db/mininote";
import { mininoteTransformer } from "~/server/transformers/mininote";

export default defineEventHandler(async (event: any) => {
  const { id } = event.context.params;

  const mininote = await getMininoteById(id, {
    include: {
      author: true,
      mediaFiles: true,
      replyTo: {
        include: {
          author: true,
        },
      },
      replies: {
        include: {
          author: true,
          replyTo: {
            include: {
              author: true,
            },
          },
        },
      },
    },
  });

  return {
    mininote: mininoteTransformer(mininote),
  };
});
