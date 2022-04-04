import { dbClient } from "./supabaseClient.js";

export const pitchLoader = async (username: string | undefined) => {
  let currentUser = username;

  let { data: excludeArray, error } = await dbClient
    .from("Users")
    .select("encounteredPitches")
    .match({ username: currentUser });

  let exclude = excludeArray[0].encounteredPitches;

  if (exclude.length === 1) {
    let { data: pitches, err } = await dbClient.from("Pitches").select();
    return pitches;
  } else {
    let { data: pitches, err } = await dbClient
      .from("Pitches")
      .select()
      .not("id", "in", `(${exclude})`);

    return pitches;
  }
};

export const castVote = async (form) => {
  let username = await form.get("username");
  let pitch = await form.get("pitchId");
  let vote = await form.get("vote");

  let { data: voteTypeAmount, error } = await dbClient
    .from("Pitches")
    .select(/* `${vote}` */)
    .match({ id: pitch });

  if (vote === "dislikes") {
    let newTotal = voteTypeAmount[0].dislikes + 1;

    let { data: updatedDislikes, err } = await dbClient
      .from("Pitches")
      .update({ dislikes: newTotal })
      .match({ id: pitch });
  } else if (vote === "likes") {
    let newTotal = voteTypeAmount[0].likes + 1;

    let { data: updatedLikes, err } = await dbClient
      .from("Pitches")
      .update({ likes: newTotal })
      .match({ id: pitch });
  }

  rememberEncounter(pitch, username);

  return;
};

export const rememberEncounter = async (encounteredPitch, username) => {
  let { data: currentUser, error } = await dbClient
    .from("Users")
    .select("encounteredPitches")
    .match({ username: username });

  let encounteredArray = currentUser[0].encounteredPitches;

  encounteredArray.push(encounteredPitch);

  let { data: updatedEncounters, err } = await dbClient
    .from("Users")
    .update({ encounteredPitches: encounteredArray })
    .match({ username: username });
  console.log(updatedEncounters);
  console.log("is updated encounters");

  return currentUser;
};
