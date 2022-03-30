import React from 'react'

type Props = {
    needText: string,
    imageUrl: string
}

function NeedCard({needText, imageUrl}: Props) {
  return (
    <div className="text-3xl pb-[80vh]">{needText}
    {imageUrl}</div>
  )
}

export default NeedCard