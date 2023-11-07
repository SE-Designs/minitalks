import { sendError } from "#imports";
import bcrypt from "bcryptjs";
import { getUserByEmail, getUserByUsername } from "~/server/db/user";
import { userTransformer } from "~/server/transformers/user";
import checkValidEmail from "~/utils/checkValidEmail";
import generateTokens from "~/utils/generateTokens";

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
  } else {
    user = await getUserByUsername(username);
  }

  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Some field is invalid",
      })
    );
  }

  // compare passwords:
  const isCorrectPassword = await bcrypt.compare(password, user.password);

  // generate tokens:
  const { accessToken, refreshToken } = generateTokens(user);

  return {
    access_token: accessToken,
    user: userTransformer(user),
  };
});
