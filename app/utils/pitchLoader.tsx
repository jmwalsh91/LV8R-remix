import { dbClient } from "./supabaseClient.js";

export const pitchLoader = async (username: string | undefined) => {
let currentUser = username

let {data: pitches, oops} = await dbClient
.from("Pitches")
.select()



return pitches
}

export const vote = async (otherPitch: any, vote: string, username: string ) => { 
    let likesDislikes = vote
    let {data: encounteredPitch, error} = await dbClient
    .from("Pitches")
    .select("likes, dislikes")
    .match({pitchId: otherPitch})

    console.log(encounteredPitch)
    rememberEncounter(encounteredPitch, username)



}

export const rememberEncounter = async (encounteredPitch, currentUsername) => {

    let {data: currentUser, error} = await dbClient
    .from("Users")
    .update({encounteredPitches: encounteredPitch})
    .match({username: currentUsername})

    console.log(currentUser)


}