import {ActionFunction, redirect} from 'remix'

import Register from '~/components/Forms/Register'

import { registerSubmit } from '~/utils/crud.js'


export let action: ActionFunction = async ({request}) => {
    let data = await request.formData()
    let form = Object.fromEntries(data)
    let accountId = await registerSubmit({form})
    if (accountId !== "error") return redirect(`/register/${accountId}`)
    else console.log("error")
}
    
export default function RegisterAccount ({}: any) {
    return (
        <>
        <Register/>
        </>
    )

}