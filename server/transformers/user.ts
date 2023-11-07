// user.ts: skipping password transformer
function userTransformer(user: any) {
  return {
    id: user.id,
    email: user.email,
    username: user.username,
  };
}

export { userTransformer };
