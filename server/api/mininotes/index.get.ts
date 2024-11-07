import { getMininotes } from "~/server/db/mininote";
import { mininoteTransformer } from "~/server/transformers/mininote";

export default defineEventHandler(async (event: any) => {
  const params = getQuery(event);

  const { searchQuery } = params;
  const { orderByQuery } = params as any;
  const { lastCursorPoint } = params;

  console.log(`search: ${searchQuery}`);
  console.log(`order: ${orderByQuery}`);
  console.log(`cursor: ${Number(lastCursorPoint)}`);

  const showPerPage = 4;

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
    take: showPerPage,
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
      take: showPerPage,

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

  const [total, mininotes] = await getMininotes(prismaQuery);

  if (Number(lastCursorPoint) >= total) {
    return;
  }

  return {
    total: total,
    mininotes: mininotes.map(mininoteTransformer),
  };
});
