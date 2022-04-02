import { ActionFunction } from "remix";
import { castVote } from "~/utils/pitchLoader";

 export let action: ActionFunction = async ({request}) => {
    let form = await request.formData()
    console.log(form)
    console.log("this is pitch submit")
  /*   let voteSuccess = await castVote(pitchId, vote, username) */

return "hi"
}