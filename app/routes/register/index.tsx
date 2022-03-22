import React, { useState } from 'react'
import { json, useLoaderData, ActionFunction, redirect } from 'remix'
import { dbClient } from '../../utils/supabaseClient.js'
import Register from '~/components/Forms/Register'
import Foundation from '~/components/layoutAndWrappers/Foundation'
import { authenticator } from '~/services/auth.server.js'
import { registerSubmit } from '~/services/auth.server.js'

export let action: ActionFunction = async ({request, context}) => {

 let user = await authenticator.authenticate("form-register", request, {
      failureRedirect: "/logreg",
      context
    })
    console.log(user)
   return null
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