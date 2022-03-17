import React, { useState } from 'react'

type Props = {}

function BuildPitch({}: Props) {
    const [page, setPage] = useState()


  return (

<div className="card w-96 bg-neutral text-neutral-content my-10">

  <div className="card-body items-center text-center">


   
  <h2 className="card-title text-xl ">Build your pitch.</h2>
  <ul className="steps steps-vertical lg:steps-horizontal min-w-full">
  <li className="step step-primary">Pitch Hook</li>
  <li className="step">Pitch Body </li>
  <li className="step">Pitch Outro</li>
</ul>


<div className="form-control min-w-full">
  <textarea className="textarea textarea-bordered h-24 " placeholder="What if I told you..." defaultValue={""} />
  <label className="label">
    <span className="label-text-alt text-primary">Top text</span>
  </label> 
</div>


<div className="form-control min-w-full">
  <textarea className="textarea textarea-bordered h-24" placeholder="What if I told you..." defaultValue={""} />
  <label className="label">
    <span className="label-text-alt text-primary">Bottom text</span>
  </label> 
</div>



<div className="btn-group grid grid-cols-2">
  <button className="btn btn-outline btn-primary ">Previous page</button>
  <button className="btn btn-outline btn-primary">Next</button>
</div>
</div> 
</div> 
  
  )
}
  export default BuildPitch

