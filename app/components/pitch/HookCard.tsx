import React from 'react'
import {motion} from 'framer-motion'
type Props = {
    title: string,
    hookText: string,
    imageUrl: string
}

function HookCard({title, hookText, imageUrl}: Props) {
  return (

    <motion.div drag whileHover={{scale: 1}} className="card glass md:w-[40rem] md:h-fit flex shadow-md shadow-base-100 mt-[5vh] mb-[30vh] ">
    <div className="p-3 flex flex-col justify-center items-center ">
      <div className="text-4xl text-base-100 underline mb-2 ">
        {title}
      </div>

      <div className="text-xl text-base-100  mb-10"> {hookText} </div>

      <img
        src={imageUrl}
        alt={title + "project image"}
      />
    </div>
  </motion.div>

  )
}

export default HookCard