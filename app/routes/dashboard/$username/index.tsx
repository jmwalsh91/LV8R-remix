import React from "react";

import { ActionFunction, Form, json, Outlet, useLoaderData, useParams } from "remix";
import { getSession, sessionStorage, destroySession } from "~/services/session.server";
import { dbClient } from "../../../utils/supabaseClient";
import { LoaderFunction } from "remix";
import { redirect } from "remix";
import { authenticator } from "~/services/auth.server";

export let loader: LoaderFunction = async ({ params }) => {
/*   let session = await getSession()
  let id = await session.has
  console.log(id) */
  console.log(params.username);
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
    
    <div className="w-screen h-full sm:flex md:grid grid-cols-7 grid-rows-7 gap-1 ">

      <div className="w-full h-36 sm:flex md:grid row-start-1 col-start-1 row-end-2 col-end-4 ">
        <div className="card h-full glass border-cyan-500 border-4">
  one
      </div> 
    </div> 
      <div className="w-full h-36 sm:flex md:grid row-start-1 col-start-4 row-end-2 col-end-8  ">
      <div className="card h-full bg-neutral border-cyan-500 border-4">
      two
      </div> 

      </div>
      <div className="w-full h-full   sm:flex md:grid row-start-2 col-start-1 row-end-8 col-end-5 ">
      <div className="card h-full bg-neutral border-cyan-500 border-4">
      ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the u
      </div> 
      </div>
  
      <div className="w-full h-full  sm:flex md:grid row-start-2 col-start-5 row-end-7 col-end-8 ">
      <div className="card h-full bg-neutral border-cyan-500 border-4">
      four
      </div> 
      </div>
  
      <div className="w-full h-full  sm:flex md:grid row-start-7 col-start-5 row-end-8 col-end-8 ">
      <div className="card h-full bg-neutral border-cyan-500 border-4">
     five
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