import React from 'react'

type Props = {
    hookText: string,
    imageUrl: string
}

function HookCard({hookText, imageUrl}: Props) {
  return (
    <div className="text-3xl pb-[80vh]">{hookText} 
    {imageUrl}</div>
  )
}

export default HookCard