// app/services/session.server.ts
import { createCookieSessionStorage, SessionStorage } from "remix";

// export the whole sessionStorage object
export let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_isAuth", // use any name you want here
    sameSite: "lax", // this helps with CSRF
    path: "/", // remember to add this so the cookie will work in all routes
    httpOnly: true, // for security reasons, make this cookie http only
    secrets: ["s3cr3t"], // replace this with an actual secret
/*     secure: process.env.NODE_ENV === "production", */ // enable this in prod only
  },
});

export type User = {
    username: string,
    token: string
}
// you can also export the methods individually for your own usage
export let { getSession, commitSession, destroySession } = sessionStorage;