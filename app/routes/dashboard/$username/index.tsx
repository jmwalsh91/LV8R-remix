import React from "react";

import { ActionFunction, Form, json, Outlet, useLoaderData, useParams } from "remix";
import { getSession, handleLogout, sessionStorage, destroySession } from "~/services/session.server";
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
    </div>
  );
}

export default Index;
