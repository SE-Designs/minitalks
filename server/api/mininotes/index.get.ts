import { getMininotes } from "~/server/db/mininote";
import { mininoteTransformer } from "~/server/transformers/mininote";

export default defineEventHandler(async (event: any) => {
  const mininotes = await getMininotes({
    include: {
      author: true,
      mediaFiles: true,
      replies: {
        include: {
          author: true,
        },
      },
      replyTo: {
        include: {
          author: true,
        },
      },
    },
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
  });

  return {
    mininotes: mininotes.map(mininoteTransformer),
  };
});
