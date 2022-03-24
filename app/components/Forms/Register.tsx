import React from "react";
import { Link } from "remix";
import Avatar from "../Misc/Avatar";
import * as bcrypt from "bcryptjs"
import {supabaseClient} from "../../utils/supabaseClient"
import { Form } from "remix";

type Props = {};

function Register({}: Props) {
  return (
    <div className="card w-96 bg-neutral ">
      <div className="card-body flex-col justify-stretch content-around space-y-3 ">
        <h2 className="card-title">Register.</h2>
        <Form method="post" name="RegisterForm">

         
      
        <div className="form-control">
          <label className="input-group">
            <span>Email</span>
            <input
              type="text"
              name="email"
              placeholder="email@domain.com"
              className="input input-bordered"
            />
          </label>
        </div>

        <div className="form-control ">
          <label className="input-group ">
            <span>Password</span>
            <input
              type="password"
              name="password1"
              placeholder="password"
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group ">
            <span>Password</span>
            <input
              type="password"
              name="password2"
              placeholder="confirm password"
              className="input input-bordered"
            />
          </label>
          <label className="label">
            <span className="label-text  ">Confirm Password</span>
          </label>
        </div>

        <div className="card-actions justify-around py-5">
        {/* <Link to="/logreg/createpitch"> */}<button className="btn btn-primary ">Register</button>{/* </Link> */}
       
        </div>
        </Form>
      </div>
    </div>
  );
}
export default Register;

