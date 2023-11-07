import { sendError } from "#imports";
import bcrypt from "bcryptjs";
import { createRefreshToken } from "~/server/db/refreshToken";
import { getUserByEmail, getUserByUsername } from "~/server/db/user";
import { userTransformer } from "~/server/transformers/user";
import checkValidEmail from "~/utils/checkValidEmail";
import generateTokens from "~/utils/generateTokens";
import sendRefreshToken from "~/utils/sendRefreshToken";

export default defineEventHandler(async (event: any) => {
  const body = await readBody(event);

  const { username, password } = body;

  if (!username || !password) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid params",
      })
    );
  }

  // is the user exists:
  let user;

  if (checkValidEmail(username)) {
    user = await getUserByEmail(username);
    console.log(`auth by email: ${user?.email}`);
  } else {
    user = await getUserByUsername(username);
    console.log(`auth by username: ${user?.username}`);
  }

  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Username/Email or password is invalid",
      })
    );
  }

  // compare passwords:
  const isCorrectPassword = await bcrypt.compare(password, user.password);

  if (!isCorrectPassword) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Username/Email or password is invalid",
      })
    );
  }

  // generate tokens:
  const { accessToken, refreshToken } = generateTokens(user);

  // save refresh token inside prisma:
  await createRefreshToken({
    token: refreshToken,
    userId: user.id,
  });

  // add http-only cookie:
  sendRefreshToken(event, refreshToken);

  return {
    access_token: accessToken,
    user: userTransformer(user),
  };
});
