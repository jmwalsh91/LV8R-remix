import { dbClient } from "./supabaseClient.js";

export const pitchLoader = async (username: string | undefined) => {
let currentUser = username

let {data: pitches, oops} = await dbClient
.from("Pitches")
.select()



return pitches
}

export const castVote = async (form) => { 
 let username = await form.get("username")
 let pitchId = await form.get("pitchId")
 let vote = await form.get("vote")

    let {data: encounteredPitch, error} = await dbClient
    .from("Pitches")
    .select("likes, dislikes")
    .match({pitchId: pitchId})

    console.log(encounteredPitch)
    rememberEncounter(encounteredPitch, username)



}

export const rememberEncounter = async (encounteredPitch, username) => {

    let {data: currentUser, error} = await dbClient
    .from("Users")
    .update({encounteredPitches: encounteredPitch})
    .match({username: username})

    console.log(currentUser)

return currentUser
}