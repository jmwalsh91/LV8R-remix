import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import ScrollWrapper from '../layoutAndWrappers/ScrollWrapper'
import { castVote } from '../../utils/pitchLoader'
import { useActionData, useFetcher } from 'remix'
import LikeButton from './LikeButton'
import DislikeButton from './DislikeButton'

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
  let pitch: object = currentPitch
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
<div>

      <ScrollWrapper>
      <div className="card glass md:w-[40rem] md:h-[40rem] flex shadow-md shadow-base-100 mb-[80vh] ">
        <div className="p-3 justify-center items-center flex-col">
<div className="text-4xl text-base-100 underline mb-2 "> AppRunner </div>


<div className="text-xl text-base-100  mb-10"> </div>

<img src="https://i.kym-cdn.com/entries/icons/facebook/000/025/388/1580752469774.jpg" alt="lofi"/>


</div>

      </div>

      </ScrollWrapper>

      <ScrollWrapper>
      <div className="card glass md:w-[40rem] md:h-[40rem] flex shadow-md shadow-base-100 mb-[80vh] ">
        <div className="p-3 justify-center items-center flex-col">
<div className="text-4xl text-base-100 underline mb-2 "> AppRunner </div>


<div className="text-xl text-base-100  mb-10"> I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhauser Gate. All those moments will be lost in time, like tears in rain.</div>

<img src="https://i.kym-cdn.com/entries/icons/facebook/000/025/388/1580752469774.jpg" alt="lofi"/>


</div>

      </div>

      </ScrollWrapper>

      <ScrollWrapper>
      <div className="card glass md:w-[40rem] md:h-[40rem] flex shadow-md shadow-base-100 mb-[80vh] ">
        <div className="p-3 justify-center items-center flex-col">
<div className="text-4xl text-base-100 underline mb-2 "> AppRunner </div>


<div className="text-xl text-base-100  mb-10"> I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhauser Gate. All those moments will be lost in time, like tears in rain.</div>

<img src="https://i.kym-cdn.com/entries/icons/facebook/000/025/388/1580752469774.jpg" alt="lofi"/>


</div>

      </div>

      </ScrollWrapper>

      <ScrollWrapper>
      <div className="card glass md:w-[40rem] md:h-[40rem] flex shadow-md shadow-base-100 mb-[5vh] ">
        <div className="p-3 justify-center items-center flex-col">
<div className="text-4xl text-base-100 underline mb-2 "> AppRunner </div>


<div className="text-xl text-base-100  mb-10"> I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhauser Gate. All those moments will be lost in time, like tears in rain.</div>

<img src="https://i.kym-cdn.com/entries/icons/facebook/000/025/388/1580752469774.jpg" alt="lofi"/>


</div>

      </div>

      </ScrollWrapper>

{/* <voteFetcher.Form
action={`/dashboard/${username}/lv8r/pitchSubmit`}
method="post"


> */}


<div className="flex justify-around pt-2 mb-[30vh]">
<DislikeButton username={currentUsername} pitchId={currentPitch.id}/>
</div>


<button className="btn btn-info shadow-md shadow-base-100 " >
<svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26 4H1V20H26V4Z" stroke="black" strokeLinejoin="round"/>
<path d="M3 16H15" stroke="black" strokeLinecap="round">
  <path d="M3 18H15" stroke="black" strokeLinecap="round">
    <path d="M3 14L15 14" stroke="black" strokeLinecap="round">
    </path></path></path>

<path d="M20.6104 9.35938C20.5583 9.40495 20.485 9.47168 20.3906 9.55957C19.6908 10.2008 19.1976 10.5215 18.9111 10.5215C18.6735 10.5215 18.4863 10.4222 18.3496 10.2236C18.2161 10.0218 18.1494 9.74349 18.1494 9.38867C18.1494 9.03711 18.2096 8.6888 18.3301 8.34375C18.4538 7.99544 18.6312 7.6748 18.8623 7.38184C19.1227 7.04004 19.4124 6.77637 19.7314 6.59082C20.0537 6.40202 20.376 6.30762 20.6982 6.30762C20.8252 6.30762 20.9473 6.32389 21.0645 6.35645C21.1849 6.38574 21.3005 6.42969 21.4111 6.48828L22.1289 6.21973C21.9336 7.03027 21.7806 7.71712 21.6699 8.28027C21.5625 8.84342 21.5088 9.22266 21.5088 9.41797C21.5088 9.55143 21.5413 9.66048 21.6064 9.74512C21.6748 9.82975 21.7594 9.87207 21.8604 9.87207C22.1761 9.87207 22.487 9.61979 22.793 9.11523C23.099 8.61068 23.252 8.05241 23.252 7.44043C23.252 6.74056 23.0273 6.18066 22.5781 5.76074C22.1322 5.34082 21.5365 5.13086 20.791 5.13086C20.319 5.13086 19.8665 5.21875 19.4336 5.39453C19.0039 5.57031 18.61 5.8291 18.252 6.1709C17.8158 6.5778 17.4805 7.04492 17.2461 7.57227C17.015 8.09635 16.8994 8.6416 16.8994 9.20801C16.8994 10.0511 17.1777 10.7412 17.7344 11.2783C18.2943 11.8187 19.0088 12.0889 19.8779 12.0889C20.5778 12.0889 21.2337 11.9261 21.8457 11.6006C22.4609 11.2751 23.0355 10.7852 23.5693 10.1309L23.7793 10.4678C23.1901 11.223 22.5505 11.7878 21.8604 12.1621C21.1702 12.5397 20.4264 12.7285 19.6289 12.7285C18.5547 12.7285 17.6742 12.4079 16.9873 11.7666C16.3037 11.1286 15.9619 10.3099 15.9619 9.31055C15.9619 8.68555 16.097 8.07682 16.3672 7.48438C16.6406 6.89193 17.0247 6.37435 17.5195 5.93164C17.9785 5.51172 18.501 5.18945 19.0869 4.96484C19.6761 4.74023 20.2897 4.62793 20.9277 4.62793C21.862 4.62793 22.6237 4.88021 23.2129 5.38477C23.8053 5.88607 24.1016 6.52734 24.1016 7.30859C24.1016 7.77734 23.9844 8.23307 23.75 8.67578C23.5189 9.11523 23.1787 9.52702 22.7295 9.91113C22.4658 10.1325 22.2168 10.3001 21.9824 10.4141C21.7513 10.5247 21.5332 10.5801 21.3281 10.5801C21.1035 10.5801 20.9245 10.4971 20.791 10.3311C20.6576 10.165 20.5908 9.9388 20.5908 9.65234C20.5908 9.61003 20.5957 9.53353 20.6055 9.42285C20.6087 9.39355 20.6104 9.3724 20.6104 9.35938ZM21.0596 7.04004C20.9652 6.97168 20.8708 6.9196 20.7764 6.88379C20.682 6.84798 20.5892 6.83008 20.498 6.83008C20.166 6.83008 19.8633 7.07259 19.5898 7.55762C19.3164 8.04264 19.1797 8.58301 19.1797 9.17871C19.1797 9.361 19.2008 9.49609 19.2432 9.58398C19.2887 9.66862 19.3571 9.71094 19.4482 9.71094C19.5394 9.71094 19.668 9.65234 19.834 9.53516C20.0033 9.41797 20.2848 9.18034 20.6787 8.82227C20.6885 8.77995 20.7357 8.56348 20.8203 8.17285C20.9049 7.77897 20.9847 7.40137 21.0596 7.04004Z" fill="black"/>
</svg>

</button>

<LikeButton  username={currentUsername} pitchId={currentPitch.id}/>
{/* </voteFetcher.Form> */}
</div>
  )
}

export default PitchScroll