// app/services/session.server.ts
import { createCookieSessionStorage, SessionStorage } from "remix";
import { redirect } from "remix";

// export the whole sessionStorage object
export let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "sb:token", // use any name you want here
    expires: new Date(Date.now() + 60),
    sameSite: "lax", // this helps with CSRF
    path: "/", // remember to add this so the cookie will work in all routes
    httpOnly: true, // for security reasons, make this cookie http only
    secrets: ["s3cr3t"],
    secure: true // replace this with an actual secret
/*     secure: process.env.NODE_ENV === "production", */ // enable this in prod only
  },
});

export type User = {
    username: string,
    token: string,
    access_token: string
}
// you can also export the methods individually for your own usage
export let { getSession, commitSession, destroySession } = sessionStorage;

export async function handleLogout(request: Request) {
  console.log('yaaaaaaaaaaaa')
  let session = await getSession(request.headers.get("Cookie"));
  console.log(session)

  return redirect("/", {
    headers: { "Set-Cookie": await destroySession(session) },
  });
}

