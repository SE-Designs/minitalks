import jwt from "jsonwebtoken";

function decodeAccessToken(token: any) {
  const config = useRuntimeConfig();

  try {
    return jwt.verify(token, config.jwtAccessSecret) as any;
  } catch (error) {
    return null;
  }
}

function decodeRefreshToken(token: any) {
  const config = useRuntimeConfig();

  try {
    return jwt.verify(token, config.jwtRefreshSecret) as any;
  } catch (error) {
    return null;
  }
}

export { decodeAccessToken, decodeRefreshToken };
