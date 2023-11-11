import prisma from ".";

function createRefreshToken(refreshToken: any) {
  return prisma.refreshToken.create({
    data: refreshToken,
  });
}

function getRefreshTokenByToken(token: string) {
  return prisma.refreshToken.findUnique({
    where: {
      token,
    },
  });
}

function removeRefreshToken(token: string) {
  return prisma.refreshToken.delete({
    where: {
      token: token,
    },
  });
}

export { createRefreshToken, getRefreshTokenByToken, removeRefreshToken };
