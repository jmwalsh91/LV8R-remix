import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import ScrollWrapper from '../layoutAndWrappers/ScrollWrapper'
import { castVote } from '../../utils/pitchLoader'
import { useActionData, useFetcher } from 'remix'
import LikeButton from './LikeButton'
import DislikeButton from './DislikeButton'
import SendCard from './SendCard'

interface currentPitch{
    id: any,
    likes: any,
    dislikes: any,
    Title: string,
    HookText: string,
    NeedText: string,
    PitchText: string,
    PitchText2: string,
    CTA: string
}

type Props = {
    currentPitch: currentPitch,
    username: string
}

function PitchScroll({currentPitch, username}: Props) {
    let [currentVote, setCurrentVote] = useState<string>("")
  let pitch = currentPitch
  let currentUsername = username
  let voteFetcher = useFetcher();
const data = useActionData()

/* 
useEffect(() => {
    console.log(currentVote)
    let id = currentPitch.id  
    voteFetcher.submit({currentVote, id, username}, {method: "post"})
 console.log("hiya there booya")
  }, [currentVote]);

    let handleVote = async (vote: string) => {
        console.log("yeuaSJHEfjksdjhfkjsgdjfg")

        return setCurrentVote(vote)
   
       
    

    }
 */
  return (

<AnimatePresence exitBeforeEnter>
      <ScrollWrapper key="1">
      <div className="card glass md:w-[40rem] md:h-fit flex shadow-md shadow-base-100 mb-[80vh] ">
        <div className="p-3 justify-center items-center flex-col">
<div className="text-4xl text-base-100 underline mb-2 ">  {pitch.Title}</div>


<div className="text-xl text-base-100  mb-10"> </div>

<img src="https://i.kym-cdn.com/entries/icons/facebook/000/025/388/1580752469774.jpg" alt="lofi"/>


</div>

      </div>

      </ScrollWrapper>

      <ScrollWrapper key="2">
      <div className="card glass md:w-[40rem] md:h-fit flex shadow-md shadow-base-100 mb-[80vh] ">
        <div className="p-3 justify-center items-center flex-col">


<div className="text-xl text-base-100  mb-10">{pitch.HookText}</div>



</div>

      </div>

      </ScrollWrapper>

      <ScrollWrapper key="3">
      <div className="card glass md:w-[40rem] md:h-fit flex shadow-md shadow-base-100 mb-[80vh] ">
        <div className="p-3 justify-center items-center flex-col">

<div className="text-xl text-base-100  mb-10"> {pitch.NeedText}</div>


</div>

      </div>

      </ScrollWrapper>

  
      <ScrollWrapper key="4">
      <div className="card glass md:w-[40rem] md:h-fit flex shadow-md shadow-base-100 mb-[5vh] ">
        <div className="p-3 justify-center items-center flex-col">


<div className="text-xl text-base-100  mb-10"> {pitch.PitchText}</div>



<div className="text-xl text-base-100  mb-10"> {pitch.PitchText2}</div>


</div>

      </div>

      </ScrollWrapper>
      <ScrollWrapper key="5">
      <div className="card glass md:w-[40rem] md:h-fit flex shadow-md shadow-base-100 mb-[10vh] ">
        <div className="p-3 justify-center items-center flex-col">

<div className="text-xl text-base-100  mb-10"> {pitch.CTA}</div>


</div>

      </div>

      </ScrollWrapper>

{/* <voteFetcher.Form
action={`/dashboard/${username}/lv8r/pitchSubmit`}
method="post"


> */}


<div className="flex justify-around pt-2 mb-[30vh]">
<DislikeButton username={currentUsername} pitchId={currentPitch.id}/>


<SendCard username={currentUsername} pitchId={currentPitch.id}/>

<LikeButton  username={currentUsername} pitchId={currentPitch.id}/>
{/* </voteFetcher.Form> */}
</div>
</AnimatePresence>
  )
}

export default PitchScroll