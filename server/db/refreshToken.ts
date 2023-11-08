import prisma from ".";

function createRefreshToken(refreshToken: any) {
  return prisma.refreshToken.create({
    data: refreshToken,
  });
}

function getRefreshTokenByToken(token: any) {
  return prisma.refreshToken.findUnique({
    where: {
      token,
    },
  });
}

export { createRefreshToken, getRefreshTokenByToken };
