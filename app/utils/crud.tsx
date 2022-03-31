import { dbClient } from "./supabaseClient.js";
import * as bcrypt from "bcryptjs";
import { AuthorizationError } from "remix-auth";
import { isErrorResponse } from "@remix-run/react/data";

export const hashPass = async (pass) => {
  let hashedPass = await bcrypt.hash(pass, 10);
  return hashedPass;
};
export const comparePass = async (pass, resPass) => {
  const isCorrect = await bcrypt.compare(pass, resPass);
  if (!isCorrect) return null;
  return isCorrect;
};
export const registerSubmit = async ({ form }) => {
  console.log(form);
  let accountId;
  let email = await form.get("email");
  let password1: any = await form.get("password1");
  let password2 = await form.get("password2");

  if (password1 !== password2) {
    console.log(password1, password2)
    throw AuthorizationError;
  } else {
    let isTaken = await dbClient
      .from("Accounts")
      .select("email")
      .ilike("email", `${email}`);

    if (isTaken.data.length === 0) {
      let hashedPass = await bcrypt.hash(password1, 10);
      let createdUser = await dbClient
        .from("Accounts")
        .insert([{ email: `${email}`, password: `${hashedPass}` }]);
      let id = createdUser.data[0].id;
      return (accountId = id);
    } else accountId = "error";
  }
  return accountId;
};

export const avatarSubmit = async ({ avatar }) => {
  let fileSubmit = async (avatar) => {
    let { data, error } = await dbClient.storage
      .from("userbucket")
      .upload(`${avatar}`, avatar, {
        contentType: ["image/png", "image/jpg"],
      });
    if (error) return "this is an error";
    if (data) return data;
  };
  return fileSubmit;
};

export const createPitch = async ({ form }) => {
  let username = await form.get("username");
  let title = await form.get("Title");
  let hookText = await form.get("HookText");
  let needText = await form.get("NeedText");
  let pitchText = await form.get("PitchText");
  let pitchText2 = await form.get("PitchText2");
  let cta = await form.get("CTA");

  let { data: pitch, error } = await dbClient.from("Pitches").insert({
    Title: title,
    HookText: hookText,
    NeedText: needText,
    PitchText: pitchText,
    PitchText2: pitchText2,
    CTA: cta,
  });
  if (error) {
    throw isErrorResponse("Something went wrong");
  }

  let { data: pitchOwner, err } = await dbClient
    .from("Users")
    .select("id")
    .ilike("username", `${username}`);
    if (error) {
      throw isErrorResponse("Something went wrong");
    }
  let updatedUser = await dbClient
    .from("Users")
    .update({ pitch: pitch[0].id })
    .match({ id: pitchOwner[0].id });

  return updatedUser;
};
