import React, { useState } from 'react'
import * as down from 'public/assets/down.svg'
import ScrollWrapper from '~/components/layoutAndWrappers/ScrollWrapper'
import { LoaderFunction, Outlet, useLoaderData } from 'remix'
import { motion, AnimatePresence } from 'framer-motion'
import {pitchLoader, rememberEncounter} from "../../../../utils/pitchLoader"

type Props = {}
export let loader: LoaderFunction = async ({request, params}) => {
  let username = params.username
  let queue = await pitchLoader(username)
  console.log(queue)

  return {queue, username}

}
function Index({}: Props) {
  const [position, setPosition] = useState<number>(0)
  
  let data = useLoaderData()
  let pitchQueue = data.queue 
  let username: any = data.username 


  return (

    <div>
You shouldn't be here!
     </div>
  )}

export default Index