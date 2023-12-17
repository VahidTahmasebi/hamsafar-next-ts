export function toStringCookies(cookies: any): string {
  let strCookie: string = "";
  cookies.getAll().forEach((item: any) => {
    strCookie += `${item?.name}=${item?.value}; `;
  });
  return strCookie;
}
