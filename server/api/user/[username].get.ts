import { getProfileAndMininotesByUsername } from "~/server/db/author";
import { publicUserTransformer } from "~/server/transformers/public-user";

export default defineEventHandler(async (event: any) => {
  const { username } = event.context.params;

  const author = (await getProfileAndMininotesByUsername(username)) as any;

  return {
    user: publicUserTransformer(author),
  };
});
