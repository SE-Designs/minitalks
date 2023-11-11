import { ShortUserType } from "~/types/types";

// user.ts: skipping password transformer
function userTransformer(user: ShortUserType) {
  return {
    id: user.id,
    email: user.email,
    username: user.username,
  };
}

export { userTransformer };
