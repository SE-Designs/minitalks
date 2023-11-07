import { sendError } from "#imports";
import { createUser } from "~/server/db/user";
import { userTransformer } from "~/server/transformers/user";

export default defineEventHandler(async (event: any) => {
  const body = await readBody(event);

  const { email, username, password, repeatPassword } = body;

  if (!email || !username || !password || !repeatPassword) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid params",
      })
    );
  }

  if (password !== repeatPassword) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Passwords should match",
      })
    );
  }

  const userData = {
    email,
    username,
    password,
  };

  const user = await createUser(userData);

  return {
    body: userTransformer(user),
  };
});
