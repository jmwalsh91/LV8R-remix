import { createCookie, json, useParams } from "remix";
import { Authenticator, AuthorizationError } from "remix-auth";
import { sessionStorage } from "./session.server";
import { User } from "./session.server";
import { FormStrategy } from "remix-auth-form";
import { dbClient } from "../utils/supabaseClient.js";

/**
     * Create a new instance of the Authenticator.
     *
     * It receives a instance of the SessionStorage. This session storage could
     * be created using any method exported by Remix, this includes:
     * - `createSessionStorage`
     * - `createFileSystemSessionStorage`
     * - `createCookieSessionStorage`
     * - `createMemorySessionStorage`
     *
     * It optionally receives an object with extra options. The supported options
     * are:
     * - `sessionKey`: The key used to store and red the user in the session storage.
     * @example
     * import { sessionStorage } from "./session.server";
     * let authenticator = new Authenticator(sessionStorage);
     * @example
     * import { sessionStorage } from "./session.server";
     * let authenticator = new Authenticator(sessionStorage, {
     *   sessionKey: "token",
     * });
     */
export let authenticator = new Authenticator<User>(sessionStorage, { 
    sessionKey: "this is the session key" 
});

authenticator.use(
  new FormStrategy(async ({ form, context }) => {
    let user
    let email = form.get("email");
    let password = form.get("password");



    const { data: res , error} = await dbClient
      .from("Accounts")
      .select(
        `password, user (id, username, email, pitch, received_cards, sent_cards)`
      )
      .match({ email: `${email}` })
      
      if (res[0].password === password) {
      console.log(res[0].user)
      user = {
          username: res[0].user.username,
          token: `${res[0].user.username}`
      }
      context = user
      } else {
          console.log("oops")
          
          return AuthorizationError 
      }
/*       .then(res => console.log(res.data)) */

   
/* 
      if (await res) {
          console.log("YAHOOOOOO")
          if (res[0].password === password) {
              console.log(res + "eee")
          } else { 
              console.log("booo")
              console.log(password, res[0])
          }
      } */

/*     if (user.data[0].password == password) {
      let userData = user.data[0].user;
      console.log(user.data[0].password == password)
      return User = {
        username: userData.username,
        token: `${new Date().getTime()}`
      };
    }
    console.log(User) */
    return user
  }),
  "form"
);
/* 
  const {data: user, error } = await dbClient
  .from('Accounts').select(`
  user (username, id)`)
  .match({email: `${email}`, password: `${password}`})
  .then(user => console.log(user[0].user)) */
