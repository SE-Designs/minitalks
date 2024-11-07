import prisma from ".";

async function createMininote(mininoteData: any) {
  return prisma.mininote.create({
    data: mininoteData,
  });
}

async function getMininotes(params: any = {}) {
  return prisma.$transaction([
    prisma.mininote.count(),
    prisma.mininote.findMany({
      ...params,
    }),
  ]);
}

async function getMininoteById(mininoteId: string, params: any = {}) {
  return prisma.mininote.findUnique({
    ...params,
    where: {
      ...params.where,
      id: mininoteId,
    },
  });
}

export { createMininote, getMininotes, getMininoteById };
