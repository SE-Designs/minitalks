import { ShortUserType } from "~/types/types";
import { userTransformer } from "~/server/transformers/user";

export default defineEventHandler(async (event) => {
  console.log(event.context.auth.user);
  return {
    user: userTransformer(event.context.auth?.user) as ShortUserType,
  };
});
