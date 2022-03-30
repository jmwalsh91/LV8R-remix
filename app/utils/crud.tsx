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
  let email = form.email;
  let password1: any = form.password1;
  let password2 = form.password2;

  if (password1 !== password2) {
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
  let one = await form.get("1");
  let two = await form.get("2");
  let three = await form.get("3");
  let four = await form.get("4");
  let five = await form.get("5");
  let six = await form.get("6");

  let { data: pitch, error } = await dbClient.from("Pitches").insert({
    FieldOne: one,
    FieldTwo: two,
    FieldThree: three,
    FieldFour: four,
    FieldFive: five,
    FieldSix: six,
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
