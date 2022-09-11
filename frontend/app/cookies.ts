import { createCookie } from "@remix-run/node";

export const user = createCookie("userId", {
  maxAge: 604_800, // one week
});
