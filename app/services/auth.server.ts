import { createCookie, json, useParams } from "remix";
import { Authenticator, AuthorizationError } from "remix-auth";
import { sessionStorage } from "./session.server";
import { User } from "./session.server";
import { FormStrategy } from "remix-auth-form";
import { dbClient } from "../utils/supabaseClient.js";
import * as bcrypt from "bcryptjs";
import { comparePass } from "~/utils/crud";
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
export let authenticator = new Authenticator<User | Error | null>(sessionStorage, {
  sessionKey: "this is the session key",
  sessionErrorKey: "Something has gone horribly wrong"
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
    let passwordMatch = await comparePass(unhashedpass, res[0].password);
    if (passwordMatch) {
      user = {
        username: res[0].user.username,
        token: `${res[0].user.username}`,
        user_id: res[0].user.id,
        pitch: res[0].user.pitch
      };
      return user;
    } else {
      throw new AuthorizationError(
        error?.message ?? "That is not what we have on file"
      );
    }
  }),
  "form"
);

authenticator.use(
  new FormStrategy(async ({ form }) => {
    let user;
    let username = form.get("username");
    let bio = form.get("bio");
    let id = form.get("id");
    console.log(id, bio, username);

    let { data: foundAccount, err } = await dbClient
      .from("Accounts")
      .select("email, id")
      .match({ id: `${id}` });
    console.log(foundAccount);
    if (foundAccount[0].email) {
      let newUser = await dbClient.from("Users").insert([
        {
          username: `${username}`,
          email: `${foundAccount[0].email}`,
          bio: `${bio}`,
        },
      ]);

      let linkedAccount = await dbClient
        .from("Accounts")
        .update({ user: `${newUser.data[0].id}` })
        .match({ email: `${foundAccount[0].email}` });

      user = {
        username: newUser.data[0].username,
        token: `${newUser.data[0].username}`,
        user_id: newUser.data[0].id,
        pitch: null 
      };
    } else user = AuthorizationError;

    return user;
  }),
  "form-create-user"
);
