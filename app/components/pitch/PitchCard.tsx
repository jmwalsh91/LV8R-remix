import React from 'react'

type Props = {
    pitchText: string,
    pitchText2: string
}

function PitchCard({pitchText, pitchText2}: Props) {
  return (
    <div className="text-3xl pb-[80vh]">PitchCard
        {pitchText}
        {pitchText2}
    </div>
  )
}

export default PitchCard