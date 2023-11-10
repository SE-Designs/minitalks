import bcrypt from "bcryptjs";
import client from ".";

function createUser(userData: any) {
  const userFinal = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10),
  };

  return client?.user.create({
    data: userFinal,
  });
}

function getUserByUsername(username: string) {
  return client.user.findUnique({
    where: {
      username,
    },
  });
}

function getUserByEmail(email: string) {
  return client.user.findUnique({
    where: {
      email,
    },
  });
}

function getUserById(userId: string) {
  return client.user.findUnique({
    where: {
      id: userId,
    },
  });
}

export { createUser, getUserByEmail, getUserByUsername, getUserById };
