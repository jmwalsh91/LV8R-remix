import React, { useState } from 'react'

type Props = {
  setPage: any


}

function BuildPitch2({setPage}: Props) {
  


  return (

<div className="card sm:w-94 md:w-fit bg-neutral text-neutral-content my-10">

  <div className="card-body items-center text-center">


   



<div className="form-control min-w-full">
  <textarea name="3" className="textarea textarea-bordered h-24 " placeholder="What if I told you..." defaultValue={""} />
  <label className="label">
    <span className="label-text-alt text-primary">Top text</span>
  </label> 
</div>


<div className="form-control min-w-full">
  <textarea name="4" className="textarea textarea-bordered h-24" placeholder="What if I told you..." defaultValue={""} />
  <label className="label">
    <span className="label-text-alt text-primary">Bottom text</span>
  </label> 
</div>



<div className="btn-group grid grid-cols-2">
  <button className="btn btn-outline btn-primary " onClick={()=>setPage(1)}>Previous page</button>
  <button className="btn btn-outline btn-primary " onClick={()=>setPage(3)}>Next</button>
</div>
</div> 
</div> 
  
  )
}
  export default BuildPitch2

