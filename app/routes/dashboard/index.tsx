import React from 'react'
import { json, useLoaderData } from 'remix'
import { getSession } from '~/services/session.server'

 type Props = {

 }

function index({}: Props) {
 
  return (
      <>
    <div className="text-4xl">this is your dashboard
    </div>
    <div className="text-4xl">I will need access to username + sent and received cards
    </div>
    <button onClick={()=> console.log(Window)}>hi</button>
    </>
  )
}

export default index 