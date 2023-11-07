export default function (event: any, token: string) {
  setCookie(event, "refresh_token", token, {
    httpOnly: true,
    sameSite: true,
  });
}
