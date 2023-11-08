import UrlPattern from "url-pattern";
import { getUserById } from "~/server/db/user";
import { decodeAccessToken } from "~/utils/decodeTokens";

export default defineEventHandler(async (event) => {
  const endpoints = [`/api/auth/user`];

  const isHandled = endpoints.some((endpoint) => {
    const pattern = new UrlPattern(endpoint);
    const url = event.node.req.url;
    return pattern.match(url as string);
  });

  if (!isHandled) return;

  const token = event.req.headers.authorization?.split(" ")[1];

  const decoded = decodeAccessToken(token);
  if (!decoded)
    sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Unauthorized",
      })
    );

  try {
    const userId = decoded.userId;
    const user = await getUserById(userId);

    event.context.auth = user;
  } catch (error) {
    console.error(`middleware: auth error: ${error}`);
    return;
  }
});
