import React, { useState } from 'react'
import { json, useLoaderData } from 'remix'
import { dbClient } from '../../utils/supabaseClient.js'
import Register from '~/components/Forms/Register'
import Foundation from '~/components/layoutAndWrappers/Foundation'
import * as bcrypt from "bcryptjs"
import {supabaseClient} from "../../utils/supabaseClient"

export async function register({ username, password }: RegisterForm) {
    let passwordHash = await bcrypt.hash(password, 10);
    return db.user.create({
      data: { username, passwordHash },
    });
  }
/* 
export const loader = async () => {
  const {data: username} = await dbClient.from("Users").select("username")
  let thing = await username[0].username
 

  return thing 
}
 */
type Props = {}

function RegisterRoute({}: Props) {

/*   const data = useLoaderData() */
  return (
    <Foundation>
<Register/>
    </Foundation>
  )
}

export default RegisterRoute