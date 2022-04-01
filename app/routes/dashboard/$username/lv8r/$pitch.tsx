import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { LoaderFunction, useLoaderData, useOutletContext } from 'remix'
import PitchScroll from '~/components/pitch/pitchScroll'

type Props = {}
export let loader: LoaderFunction = async ({request, params}) => {
    let username = params.username
    let queuePosition = params.pitch
    console.log(queuePosition)
    console.log("yeeeehaawww")
    return {username, queuePosition}
}

function $pitch({}: Props) {
    let queue: any = useOutletContext()
    let data = useLoaderData()
    let username = data.username 
    let queuePosition = data.queuePosition 
    let pitch = queue[queuePosition]
useEffect(()=>{
    console.log(pitch)
    console.log("THAT BE THA PITCH")
})

  return (
    <motion.div>
        hello {username}
<PitchScroll currentPitch={pitch} username={username}></PitchScroll>
    </motion.div>)
}

export default $pitch