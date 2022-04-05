import { isResponse } from "@remix-run/server-runtime/responses";
import { ActionFunction } from "remix";
import { castVote } from "~/utils/pitchLoader";
import { json } from "remix";


export const action: ActionFunction = async ({request}) => {
const form = await request.formData()
console.log(form._fields.vote)
try { 
    await castVote(form)
    return json(form)
} catch (error) {
    json({status: 400})
}
}