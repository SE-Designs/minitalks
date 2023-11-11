import prisma from ".";

async function createMininote(mininoteData: any) {
  return prisma.mininote.create({
    data: mininoteData,
  });
}

async function getMininotes(params: any = {}) {
  return prisma.mininote.findMany({
    ...params,
  });
}

export { createMininote, getMininotes };
