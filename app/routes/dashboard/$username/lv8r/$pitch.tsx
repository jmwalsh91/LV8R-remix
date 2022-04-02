import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { ActionFunction, LoaderFunction, useLoaderData, useOutletContext } from 'remix'
import PitchScroll from '~/components/pitch/pitchScroll'

type Props = {}
export let loader: LoaderFunction = async ({request, params}) => {
    let username = params.username
    let queuePosition = params.pitch
    console.log(queuePosition)
    console.log("yeeeehaawww")
    return {username, queuePosition}
}

export let action: ActionFunction = async ({request}) => {
    let form = await request.formData()
    console.log(form)
/* 
    let vote = (await request.formData()).get("currentVote")
    let  username = (await request.formData()).get("username")
    let pitchId = (await request.formData()).get("pitchId")
    console.log(vote, username, pitchId) */
    return "yer"
}
function $pitch({}: Props) {
    let queue: any = useOutletContext()
    let data = useLoaderData()
    let username = data.username 
    let queuePosition = data.queuePosition 
    let pitch = queue[queuePosition]


  return (
    <motion.div>
        hello {username}
<PitchScroll currentPitch={pitch} username={username}></PitchScroll>
    </motion.div>)
}

export default $pitch