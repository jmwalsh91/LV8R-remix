import React, { useState } from 'react'
import { json, useLoaderData, ActionFunction, redirect } from 'remix'

import Register from '~/components/Forms/Register'
import Foundation from '~/components/layoutAndWrappers/Foundation'
import { authenticator } from '~/services/auth.server.js'
import { registerSubmit } from '~/utils/crud.js'


export let action: ActionFunction = async ({request}) => {
    let data = await request.formData()
    let form = Object.fromEntries(data)
    let accountId = await registerSubmit({form})
    if (accountId !== "error") return redirect(`/register/${accountId}`)
    else console.log("error")
}
    
type Props = {}

function RegisterRoute({}: Props) {


  return (
    <Foundation>
<Register/>
    </Foundation>
  )
}

export default RegisterRoute