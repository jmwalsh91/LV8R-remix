import React from 'react'

type Props = {
    pitchText: string,
    pitchText2: string
}

function PitchCard({pitchText, pitchText2}: Props) {
  return (

      <div className="card glass md:w-[40rem] md:h-fit flex shadow-md shadow-base-100 mb-[30vh] ">
      <div className="p-3 flex flex-col justify-center items-center ">
        <div className="text-xl text-base-100  mb-10 ">
          {pitchText}
        </div>
  
        <div className="text-xl text-base-100  mb-10"> {pitchText2} </div>
  
      </div>
    </div>
  
  
  )
}

export default PitchCard