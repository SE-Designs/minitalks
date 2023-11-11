import prisma from ".";

function createMediaFile(mediaFile: any) {
  return prisma.mediaFile.create({
    data: mediaFile,
  });
}

export { createMediaFile };
