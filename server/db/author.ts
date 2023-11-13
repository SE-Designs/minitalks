import prisma from ".";

async function getProfileAndMininotesByUsername(
  username: string,
  params: any = {}
) {
  return prisma.user.findUnique({
    where: {
      username: username,
    },
    include: {
      mininote: {
        include: {
          author: true,
          replyTo: {
            include: {
              author: true,
            },
          },
          mediaFiles: true,
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
        where: {
          author: {
            username: username,
          },
        },
      },
    },
  });
}

// async function getMininotes(params: any = {}) {
//   return prisma.mininote.findMany({
//     ...params,
//   });
// }

// async function getMininoteById(mininoteId: string, params: any = {}) {
//   return prisma.mininote.findUnique({
//     ...params,
//     where: {
//       ...params.where,
//       id: mininoteId,
//     },
//   });
// }

export { getProfileAndMininotesByUsername };
