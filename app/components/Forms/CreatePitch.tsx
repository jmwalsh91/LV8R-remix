import React from 'react'

type Props = {}

function CreatePitch({}: Props) {
  return (
    <div className="card-body items-center text-center">


<div className="form-control min-w-full">
  <textarea name="1" className="textarea textarea-bordered h-24 " placeholder="What if I told you..." defaultValue={""} />
  <label className="label">
    <span className="label-text-alt text-primary">Top text</span>
  </label> 
</div>


<div className="form-control min-w-full">
  <textarea name="2"className="textarea textarea-bordered h-24" placeholder="What if I told you..." defaultValue={""} />
  <label className="label">
    <span className="label-text-alt text-primary">Bottom text</span>
  </label> 
</div>
   

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


    <div className="form-control min-w-full">
      <textarea name="5" className="textarea textarea-bordered h-24 " placeholder="What if I told you..." defaultValue={""} />
      <label className="label">
        <span className="label-text-alt text-primary">Top text</span>
      </label> 
    </div>
    
    
    <div className="form-control min-w-full">
      <textarea name="6" className="textarea textarea-bordered h-24" placeholder="What if I told you..." defaultValue={""} />
      <label className="label">
        <span className="label-text-alt text-primary">Bottom text</span>
      </label> 
    </div>
    </div>
  )
}

export default CreatePitch