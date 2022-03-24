import React from "react";

import { json, Outlet, useLoaderData, useParams } from "remix";
import { getSession, sessionStorage } from "~/services/session.server";
import { dbClient } from "../../../utils/supabaseClient";
import { LoaderFunction } from "remix";

export let loader: LoaderFunction = async ({ params }) => {
  let session = await getSession()
  let id = await session.has
  console.log(id)
  console.log(params.username);
  return params.username;
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
          </p>{" "}
          <Outlet />{" "}
        </div>
      </div>
    </div>
  );
}

export default Index;
