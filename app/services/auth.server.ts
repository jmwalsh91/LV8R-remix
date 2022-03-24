import { createCookie, json, useParams } from "remix";
import { Authenticator, AuthorizationError } from "remix-auth";
import { sessionStorage } from "./session.server";
import { User } from "./session.server";
import { FormStrategy } from "remix-auth-form";
import { dbClient } from "../utils/supabaseClient.js";
import * as bcrypt from "bcryptjs";
import { comparePass, hashPass } from "~/utils/crud";
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
  sessionKey: "this is the session key",
});

authenticator.use(
  new FormStrategy(async ({ form, context }) => {
    let user;

    let formEmail = await form.get("email");
    let unhashedpass = await form.get("password");



    const { data: res, error } = await dbClient
      .from("Accounts")
      .select(
        `password, user (id, username, email, pitch, received_cards, sent_cards)`
      )
      .match({ email: `${formEmail}` });
      let passwordMatch = await comparePass(unhashedpass, res[0].password)
    if (passwordMatch) {
      console.log(res);
      user = {
        username: res[0].user.username,
        token: `${res[0].user.username}`,
      };
      console.log(user.username + user.token)
     return user 
    } else {
      console.log(res)

      console.log(res[0].password + " is response pass")
      console.log("oops");

      throw new AuthorizationError(
        error?.message ?? 'That is not what we have on file',
    );
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

  }),
  "form"
);


  authenticator.use(
    new FormStrategy(async ({ form }) => {
      let user;
      console.log(form)
      let username = form.get("username")
      let bio = form.get("bio")
      let id = form.get("id")
      console.log (id, bio, username)

      let {data: foundAccount, err} = await dbClient
      .from("Accounts")
      .select('email, id')
      .match({id: `${id}`})
      console.log(foundAccount)
      if (foundAccount[0].email) {
        let newUser = await dbClient
        .from("Users")
        .insert([
          {username: `${username}`, email: `${foundAccount[0].email}`, bio: `${bio}`
         }
        ])
        console.log("new user iss.....")
        console.log(newUser)
        
        let linkedAccount = await dbClient
        .from("Accounts")
        .update({user: `${newUser.data[0].id}`})
        .match({email: `${foundAccount[0].email}` })
        console.log("account")
        console.log(linkedAccount)
        user = {
          username: newUser.data[0].username,
          token: `${newUser.data[0].username}`,
        };
         
      } else user = AuthorizationError
    
      
    /*   let avatarImg = form.get("avatar") */
    
  
 return user
   
    }),
    "form-create-user"
  );
  