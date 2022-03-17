import React, { useState } from 'react'

type Props = {}

function BuildPitch({}: Props) {
    const [page, setPage] = useState()


  return (

<div className="card w-96 bg-neutral text-neutral-content">
<ul className="steps steps-vertical lg:steps-horizontal">
  <li className="step step-primary">Pitch Hook</li>
  <li className="step">Pitch Body </li>
  <li className="step">Pitch Outro</li>
</ul>

  <div className="card-body items-center text-center">


   
  <h2 className="card-title">Build your pitch.</h2>
   

 <label className="input-group">

<div className="form-control">
 <label className="label">
   <span className="label-text">Top Text</span>
 <textarea className="textarea textarea-secondary" placeholder="Bio"></textarea>
 </label>
 </div> 
</label> 
<label className="input-group">

<div className="form-control">
 <label className="label">
   <span className="label-text">Top Text</span>
 <textarea className="textarea textarea-secondary" placeholder="Bio"></textarea>
 </label>
 </div> 
</label> 

<div className="btn-group grid grid-cols-2">
  <button className="btn btn-outline disabled">Previous page</button>
  <button className="btn btn-outline">Next</button>
</div>
</div> 
</div> 
  
  )
}
  export default BuildPitch

