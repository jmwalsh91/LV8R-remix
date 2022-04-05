import React, { useState } from 'react'
import { json, redirect, useLoaderData, LoaderFunction } from 'remix'
import { commitSession, getSession } from '~/services/session.server'
import LogIn from '~/components/Forms/LogIn'
import Foundation from '~/components/layoutAndWrappers/Foundation'
import { ActionFunction } from 'remix'
import { authenticator } from '~/services/auth.server.js'
import { motion } from 'framer-motion'
/* 
export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, { 
    failureRedirect: "/logreg"
  })
}
 */
export let action: ActionFunction = async ({request, context}) => {
  let user = await authenticator.authenticate("form", request, {
    failureRedirect: "/logreg",
    context
  })
  if (user) { 
    console.log(user)
    console.log("is user on logreg index")
    
    let session = await getSession(request.headers.get("Cookie"))
    //do we want access token or just token, for now? 
    session.set("auth:token", user)
    let username = session.data["auth:token"].username
    return redirect(`/dashboard/${username}`, { 
    headers: { "Set-Cookie": await commitSession(session) },
  });
    
  }
  }
  


type Props = {}

function LoginRegister({}: Props) {
    const [reg,setReg] = useState(false)

  return (
   <>
<LogIn setReg={setReg}/>
</>
  )
}

export default LoginRegister