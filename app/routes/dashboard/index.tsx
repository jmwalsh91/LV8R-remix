import React from 'react'
import { json, Outlet, useLoaderData, useParams } from 'remix'
import { getSession } from '~/services/session.server'
import {dbClient} from '../../utils/supabaseClient'
import Cards from './cards'

export let loader = async ({params}) => {
    const username = params.username
    console.log(username + "woousername")
let userdata = await dbClient.from("Users")
.select(
  `id, username, email, pitch, received_cards, sent_cards)`
)
.match({ username: `${params.username}` })
return userdata
}

 type Props = {

 }

function Index({}: Props) {
 let data = useLoaderData()

  return (
<Outlet/>
  )
}

export default Index 