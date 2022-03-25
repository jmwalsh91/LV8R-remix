import React, { useState } from 'react'
import { json, redirect, useLoaderData } from 'remix'
import { commitSession, getSession } from '~/services/session.server'
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
    let session = await getSession()
    return redirect(`/dashboard/${user.username}`, { 
    headers: { "Set-Cookie": await commitSession(session) },
  });
    
  }
  }
  


type Props = {}

function LoginRegister({}: Props) {
    const [reg,setReg] = useState(false)

  return (
    <Foundation>
<LogIn setReg={setReg}/>
    </Foundation>
  )
}

export default LoginRegister