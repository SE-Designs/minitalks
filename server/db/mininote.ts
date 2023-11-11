import prisma from ".";

async function createMininote(mininoteData: any) {
  return prisma.mininote.create({
    data: mininoteData,
  });
}

export { createMininote };
