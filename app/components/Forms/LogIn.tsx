import React from 'react'

type Props = {}

function LogIn({}: Props) {
  return (

<div className="card w-96 bg-neutral text-neutral-content my-10">
  <div className="card-body items-center text-center">


   
  <h2 className="card-title">Sign in to your account.</h2>
   
   <div className="form-control ">
 <label className="label">
   <span className="label-text">Email</span>
 </label>
 <label className="input-group min-w-full">
   <span>Email</span>
   <input type="text" placeholder="email@domain.com" className="input input-bordered" />
 </label>
</div>
<div className="form-control">
 <label className="label">
   <span className="label-text">Password</span>
 </label>
 <label className="input-group">
   <span>Password</span>
   <input type="password" placeholder="password" className="input input-bordered" />
 </label>

<div className="card-actions justify-around py-5">
<button className="btn btn-ghost">Register</button>
  <button className="btn btn-primary ">LogIn</button>

</div>

  </div>
</div>
</div> 

  
  )
}
  export default LogIn

