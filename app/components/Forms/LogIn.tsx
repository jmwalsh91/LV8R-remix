import React from "react";
import { Link, useNavigate } from "remix";
import { Form, ActionFunction, LoaderFunction, redirect, useActionData } from "remix";
import { authenticator } from "~/services/auth.server";
type Props = {
  setReg: Function;
};


/* 
export let loader: LoaderFunction = async ({ request }) => {
  console.log(request)
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/dashboard"
  })
} */
interface formData {
  value: string
}
const LogIn:React.FC<Props> = ({ setReg }: Props) => {
  let navigate = useNavigate()
  const actionData = useActionData()
/*   
  function handleRegisterClick() {
      console.log("clicky")
    navigate("/register/account")
  } */
/*   function handleLoginClick() {
    console.log("I click")
    navigate("/dashboard")
  }
   */

  return (

    <div className="card w-96 bg-neutral text-neutral-content my-10">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Sign in to your account.</h2>
<Form method="post">
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <label className="input-group min-w-full">
            <span>Email</span>
            <input
              type="text"
              name="email"
              placeholder="email@domain.com"
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <label className="input-group">
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
          </label>
</div> 
          <div className="card-actions justify-around py-5">
      
      <button type="submit" className="btn btn-primary ">LogIn</button>
    </div>
        </Form>
        <Link to="/register/account"><button
className="btn btn-ghost"
>
  
Register
</button>
</Link>
<div>{actionData?.error ? actionData?.error?.message : null}</div>
      </div>
  
    </div>

  );
}
export default LogIn;



