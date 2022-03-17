import React from "react";
import { Link } from "remix";
import Avatar from "../Misc/Avatar";

type Props = {};

function Register({}: Props) {
  return (
    <div className="card w-96 bg-neutral ">
      <div className="card-body flex-col justify-stretch content-around space-y-3 ">
        <h2 className="card-title">Register.</h2>

        <div className="container flex-col items-center">
          <Avatar image={"https://api.lorem.space/image/face?hash=3174"} />

          <form action="/action_page.php">
            <input type="file" id="myFile" name="filename" />
          </form>
        </div>
        <div className="form-control">
          <label className="input-group">
            <span>Email</span>
            <input
              type="text"
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
              placeholder="password"
              className="input input-bordered"
            />
          </label>
          <label className="label">
            <span className="label-text  ">Confirm Password</span>
          </label>
        </div>

        <div className="card-actions justify-around py-5">
        <Link to="/logreg/createpitch"><button className="btn btn-primary ">Register</button></Link>
        </div>
      </div>
    </div>
  );
}
export default Register;
