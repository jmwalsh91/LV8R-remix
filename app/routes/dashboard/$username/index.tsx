import React from "react";

import { ActionFunction, Form, json, Link, Outlet, useLoaderData, useParams } from "remix";
import { getSession, sessionStorage, destroySession } from "~/services/session.server";
import { dbClient } from "../../../utils/supabaseClient";
import { LoaderFunction } from "remix";
import { redirect } from "remix";
import { authenticator } from "~/services/auth.server";
import StackNotif from "~/components/dashboard/StackNotif";
import UserInfo from "~/components/dashboard/UserInfo";
import { hasPitch } from "~/utils/crud";
import { motion } from "framer-motion";
import { Scripts } from "remix";

export let loader: LoaderFunction = async ({ request, params }) => {
  let session = await getSession(request.headers.get("Cookie"))
 let auth = await session.has("Cookie")
  let userdata = await session.get("auth:token")
//fix
  let pitch = await hasPitch(params.username)
  return {pitch}
};



/*   export const action: ActionFunction = async ({
  request,
}) => {
  let session = await getSession(request.headers.get("Cookie"))
  console.log("I AM NAVIGATING")
 
  let userdata = session.data["auth:token"]
  console.log(userdata)

  return await authenticator.logout(request, {redirectTo: "/logreg"})
}; */
type Props = any

function Index({}: Props) {
  let data = useLoaderData();

  return (

    <div className="w-screen h-full flex flex-col items-center justify-center    ">



<div className="grid grid-cols-2 justify-between">



</div>


<div className="w-[90vw] h-[80vh] glass flex flex-col items-center justify-center">
<div className="text-4xl text-base-100 btn btn-primary m-5 "> <Link to="lv8r/0" >LV8R:RIDE</Link> </div>
<div className="text-4xl text-base-100 btn btn-primary m-5">  <Link to="make" >PITCH:MAKE</Link> </div>
<div className="text-4xl text-base-100 btn btn-primary m-5 ">  <Link to="edit" >PITCH:EDIT</Link> </div>
<div className="text-4xl text-base-100 btn btn-primary m-5 ">  <Link to="createcard" >CARD:MAKE</Link> </div>

<div>
 
    <Outlet/> 
    </div>
</div>
    </div>










/* 
    <div className="card w-96 bg-neutral text-neutral-content my-10">
      <div className="card-body items-center text-center">
        <div>
          <p className="text-xl">
            {" "}
            this is the index of $username, welcome,{" "}
  {username}
  <Form method="post"><button className="btn-accent" > log out </button></Form>
          </p>
         
            
          <Outlet />{" "}
        </div>
      </div>
    </div> */
  );
}

export default Index;


      
/*      .div1 { grid-area: 1 / 4 / 2 / 8; }
      .div2 { grid-area: 1 / 4 / 3 / 8; }
      .div3 { grid-area: 3 / 5 / 7 / 8; }
      .div4 { grid-area: 3 / 1 / 8 / 5; }
      .div5 { grid-area: 1 / 1 / 3 / 4; }
      .div6 { grid-area: 7 / 5 / 8 / 8; } */