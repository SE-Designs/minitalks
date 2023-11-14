import { getMininotes } from "~/server/db/mininote";
import { mininoteTransformer } from "~/server/transformers/mininote";

export default defineEventHandler(async (event: any) => {
  const params = getQuery(event);

  const { searchQuery } = params;
  const { orderByQuery } = params as any;

  console.log(`search: ${searchQuery}`);
  console.log(`order: ${orderByQuery}`);

  let orderBy = [
    {
      createdAt: "desc",
    },
  ];

  if (!!orderByQuery) {
    orderBy = [
      JSON.parse(orderByQuery),
      {
        createdAt: "desc",
      },
    ];
  }

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
        likedIds: "asc",
      },
      {
        createdAt: "asc",
      },
    ],
  } as any;

  if (!!params) {
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
      // orderByQuery:
      orderBy,
      // searchQuery:
      where: {
        content: {
          contains: searchQuery,
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
