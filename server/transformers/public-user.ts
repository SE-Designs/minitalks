import { PublicUserType } from "~/types/types";

// user.ts: skipping password transformer
function publicUserTransformer(user: PublicUserType) {
  return {
    id: user.id,
    email: user.email,
    username: user.username,
    avatar: user.avatar,
    following: user.following,
    followingNumber: user.following ? user.following.length : 0,
    mininote: user.mininote,
    // joinedAt: shortDate(user.createdAt)
  };
}

export { publicUserTransformer };
