import React from "react";

import { json, Outlet, useLoaderData, useParams } from "remix";
import { getSession } from "~/services/session.server";
import { dbClient } from "../../../utils/supabaseClient";

export let loader = async ({ params }) => {
  const username = params.username;
  let userdata = await dbClient
    .from("Users")
    .select(`id, username, email, pitch, received_cards, sent_cards)`)
    .match({ username: `${params.username}` });
  console.log(userdata.data[0]);
  return userdata.data[0];
};
type Props = {};

function Index({}: Props) {
  let data = useLoaderData();
  return (
    <div className="card w-96 bg-neutral text-neutral-content my-10">
      <div className="card-body items-center text-center">
        <div>
          <p className="text-xl">
            {" "}
            this is the index of $username, welcome,{" "}
            {data.username}
          </p>{" "}
          <Outlet />{" "}
        </div>
      </div>
    </div>
  );
}

export default Index;
