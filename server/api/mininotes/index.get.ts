import { getMininotes } from "~/server/db/mininote";
import { mininoteTransformer } from "~/server/transformers/mininote";

export default defineEventHandler(async (event: any) => {
  const { query } = getQuery(event);

  let prismaQuery = {
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
  } as any;

  if (!!query) {
    prismaQuery = {
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
      where: {
        content: {
          contains: query,
          mode: "insensitive",
        },
      },
    };
  }

  const mininotes = await getMininotes(prismaQuery);

  return {
    mininotes: mininotes.map(mininoteTransformer),
  };
});
