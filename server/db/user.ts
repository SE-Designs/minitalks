import client from ".";
import bcrypt from "bcrypt";

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

export { createUser, getUserByEmail, getUserByUsername };
