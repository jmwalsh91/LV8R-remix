import React from 'react'

type Props = {
    needText: string,
    imageUrl: string
}

function NeedCard({needText, imageUrl}: Props) {
  return (
    <div className="card glass md:w-[40rem] md:h-fit flex shadow-md shadow-base-100 mb-[30vh] ">
    <div className="p-3 flex flex-col justify-center items-center ">

      <div className="text-xl text-base-100  mb-10"> {needText} </div>

      <img
        src={imageUrl}
        alt="user selected content"
      />
    </div>
  </div>
  )
}

export default NeedCard