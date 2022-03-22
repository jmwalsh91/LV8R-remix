import React, { useState } from 'react'
import { json, redirect, useLoaderData } from 'remix'
import { dbClient } from '../../utils/supabaseClient.js'
import Register from '~/components/Forms/Register'
import LogIn from '~/components/Forms/LogIn'
import Foundation from '~/components/layoutAndWrappers/Foundation'
import { ActionFunction } from 'remix'
import { authenticator } from '~/services/auth.server.js'

export let action: ActionFunction = async ({request, context}) => {
  let user = await authenticator.authenticate("form", request, {
    failureRedirect: "/logreg",
    context
  })
  if (user) { 
    console.log(user)
    console.log("i see a log")
    return redirect(`/dashboard/${user.username}`)
  }
  }
  
export const loader = async () => {
/*   const {data: username} = await dbClient.from("Users").select("username")
  let thing = await username[0].username */
 let thing = "hiii"

  return thing 
}

type Props = {}

function LoginRegister({}: Props) {
    const [reg,setReg] = useState(false)
  const data = useLoaderData()
  return (
    <Foundation>
<LogIn setReg={setReg}/>
    </Foundation>
  )
}

export default LoginRegister