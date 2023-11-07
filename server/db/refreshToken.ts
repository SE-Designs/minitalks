import prisma from ".";

function createRefreshToken(refreshToken: any) {
  return prisma.refreshToken.create({
    data: refreshToken,
  });
}

export { createRefreshToken };
