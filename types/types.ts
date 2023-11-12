export type DecodedTokenType = {
  userId: string;
  iat: number;
  exp: number;
};

export type TokenType = {
  id: string;
  token: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
};

export type MininoteType = {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  author: UserType;
  likedIds: string[];
  viewedIds: string[];
  replyToId?: string;
  replyTo?: string;
  replies: string[];
};

export type UserType = {
  id: string;
  email: string;
  username: string;
  password?: string;
  avatar: string | null;
  following: string[];
  createdAt: Date;
  updatedAt: Date;
  refreshToken: TokenType[];
  mininote: MininoteType[];
};

export type PublicUserType = Pick<
  UserType,
  "id" | "email" | "username" | "avatar" | "following" | "mininote"
>;

export type ShortUserType = Pick<
  UserType,
  "id" | "email" | "username" | "avatar"
>;
