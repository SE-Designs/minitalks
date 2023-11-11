import jwt from "jsonwebtoken";

/**
 * Decode Access Token:
 ** accept: token (string)
 ** returns:
 *
 */
function decodeAccessToken(token: string) {
  const config = useRuntimeConfig();

  try {
    return jwt.verify(token, config.jwtAccessSecret);
  } catch (error) {
    return console.error(`DECODE ACCESS ERR: ${error}`);
  }
}

/**
 * Decode Refresh Token:
 ** accept: token (string)
 ** returns:
 *
 */
function decodeRefreshToken(token: string) {
  const config = useRuntimeConfig();

  try {
    return jwt.verify(token, config.jwtRefreshSecret);
  } catch (error) {
    return console.error(`DECODE REFRESH ERR: ${error}`);
  }
}

export { decodeAccessToken, decodeRefreshToken };
