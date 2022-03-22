import React from "react";
import { useNavigate } from "remix";
import { Form, ActionFunction, LoaderFunction, redirect } from "remix";
import { authenticator } from "~/services/auth.server";
type Props = {
  setReg: Function;
};


export let loader: LoaderFunction = async ({ request }) => {
  console.log(request)
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/dashboard"
  })
}

const LogIn:React.FC<Props> = ({ setReg }: Props) => {
  let navigate = useNavigate()
  
  function handleRegisterClick() {
      console.log("clicky")
    navigate("/register")
  }
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
      
      <button className="btn btn-primary ">LogIn</button>
    </div>
        </Form>
        <button
className="btn btn-ghost"
onClick={() => handleRegisterClick()}
>
Register
</button>
      </div>
  
    </div>

  );
}
export default LogIn;



