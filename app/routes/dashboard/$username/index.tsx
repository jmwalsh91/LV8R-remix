import React from "react";

import { ActionFunction, Form, json, Link, Outlet, useLoaderData, useParams } from "remix";
import { getSession, sessionStorage, destroySession } from "~/services/session.server";
import { dbClient } from "../../../utils/supabaseClient";
import { LoaderFunction } from "remix";
import { redirect } from "remix";
import { authenticator } from "~/services/auth.server";
import StackNotif from "~/components/dashboard/StackNotif";
import UserInfo from "~/components/dashboard/UserInfo";


export let loader: LoaderFunction = async ({ params }) => {
/*   let session = await getSession()
  let id = await session.has
  console.log(id) */
  return params.username;
};
export const action: ActionFunction = async ({
  request,
}) => {
  console.log("whoa there")
  
  return await authenticator.logout(request, {redirectTo: "/logreg"})
};

type Props = any

function Index({}: Props) {
  let username: any = useLoaderData();
  return (

    <div className="w-screen h-full flex flex-col items-center justify-center    ">



<div className="grid grid-cols-2 justify-between">



<div className="glass">
<UserInfo username="hiiii" userImage="hola"/>
</div> 

</div>


<div className="w-[90vw] h-[80vh] glass">
<div className="tabs tabs-boxed w-64 ">
  <Link to="lv8r" className="tab">LV8R:RIDE</Link> 
  <Link to="make" className="tab tab-active">MAKE</Link> 
  <a className="tab">Tab 3</a>
</div>
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