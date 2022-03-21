import React, { useState } from 'react'
import { json, useLoaderData } from 'remix'
import { dbClient } from '../../utils/supabaseClient.js'
import Register from '~/components/Forms/Register'
import LogIn from '~/components/Forms/LogIn'
import Foundation from '~/components/layoutAndWrappers/Foundation'


export const loader = async () => {
  console.log(process.env.SUPABASE_URL)
  const {data: username} = await dbClient.from("Users").select("username")
  let thing = await username[0].username
 

  return thing 
}

type Props = {}

function LoginRegister({}: Props) {
    const [reg,setReg] = useState(false)
  const data = useLoaderData()
  return (
    <Foundation>
      <p>{data}</p>
    {reg === true?  <Register/> : <LogIn setReg={setReg}/>} 
    </Foundation>
  )
}

export default LoginRegister