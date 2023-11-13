import bcrypt from "bcryptjs";
import prisma from ".";

function createUser(userData: any) {
  const userFinal = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10),
  };

  return prisma?.user.create({
    data: userFinal,
  });
}

function getUserByUsername(username: string) {
  return prisma.user.findUnique({
    where: {
      username,
    },
  });
}

function getUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

function getUserById(userId: string) {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
}

export { createUser, getUserByEmail, getUserByUsername, getUserById };
