import React, { useState } from 'react'
import { useFetcher } from 'remix'

type Props = {
    username: any,
    pitchId: any, 
}

function DislikeButton({username, pitchId}: Props) {
    const dislikeSubmit = useFetcher()
    

  return (
    <dislikeSubmit.Form method="post">
        
        <input type="hidden" value={username} name="username"/>
        <input type="hidden" value={pitchId} name="pitchId"/>
        <input type="hidden" value="dislikes" name="vote"/>
        <button className="btn btn-accent shadow-md shadow-base-100 " type="submit">
    <svg width={35} height={36} viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={35} height={36} fill="none" />
      <circle cx={18} cy={19} r="13.5" stroke="black" strokeLinejoin="round" />
      <path d="M11 16L18.2414 25L26 16" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </button>
</dislikeSubmit.Form>
  )
}

export default DislikeButton