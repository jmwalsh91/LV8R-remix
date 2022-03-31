import React, { useState } from "react";
import {
  Form,
  ActionFunction,
  Link,
  LoaderFunction,
  useLoaderData,
  redirect,
} from "remix";
import { commitSession } from "~/services/session.server";
import BuildPitch from "~/components/Forms/BuildPitch";
import BuildPitch2 from "~/components/Forms/BuildPitch2";
import BuildPitch3 from "~/components/Forms/BuildPitch3";
import CreatePitch from "~/components/Forms/CreatePitch";
import ScrollWrapper from "~/components/layoutAndWrappers/ScrollWrapper";
import EndCard from "~/components/pitch/EndCard";
import HookCard from "~/components/pitch/HookCard";
import NeedCard from "~/components/pitch/NeedCard";
import PitchCard from "~/components/pitch/PitchCard";
import { getSession } from "~/services/session.server";
import { createPitch } from "~/utils/crud";
import { authenticator } from "~/services/auth.server";

export let action: ActionFunction = async ({ request }) => {
  /* //get user object from sessions instead of params, wherever this occurs. */
  let form = await request.formData();
  let updatedUser = await createPitch({ form });
  console.log("place oacsdf");
  console.log(updatedUser.data[0]);

  let session = await getSession(request.headers.get("Cookie"));
  session.set("auth:token", updatedUser.data[0].username);

  return redirect(`/dashboard/${updatedUser.data[0].username}`, {
    headers: { "Set-Cookie": await commitSession(session) },
  });
};

export let loader: LoaderFunction = async ({ request, params }) => {
  let session = await getSession(request.headers.get("Cookie"));
  console.log(session.data);
  //do we want access token or just token, for now?
  let answers = await session.get("id");
  console.log("is answers");
  console.log(answers);

  /*   let username = session.data["auth:token"].username) */

  return params.username;
};

type Props = {};

function $make({}: Props) {
  //most likely better to have scroll on y-axis than to build pitch over successive pages. Can get rid of state, here.

  const username = useLoaderData();
  return (
    <div>
      {/*           <h2 className="sm:pl-1 card-title ">Build your pitch.</h2>
  <ul className="steps steps-horizontal min-w-full">
  <li className="step step-primary">Pitch Hook</li>
  <li className="step">Pitch Body </li>
  <li className="step">Pitch Outro</li>
</ul>
 */}

      <Form method="post">
        <input type="hidden" name="username" value={`${username}`} />
 
        <ScrollWrapper>
          <div className="glass p-2 mb-[30vh] mt-[20vh]">
          <input
            name="title"
            className="form-control min-w-full"
            placeholder="Name of your product or project"
            defaultValue={""}
          ></input>

          <div className="form-control ">
            <label className="label">
              Hook!
          
            </label>
            <textarea
              name="HookText"
              className="textarea textarea-accent w-80 h-[30vh]  sm:h-[30rem] md:h-[20vh] lg:w-[40rem] text-md lg:text-2xl "
              placeholder="Catch our interest!"
              defaultValue={""}
            />
          </div>
          <p> image upload here</p>
          </div>
        </ScrollWrapper>
        <ScrollWrapper>
        <div className="glass p-2 mb-[30vh]">
          <div className="form-control min-w-full">
          <label className="label">Need, or demand.
    
            </label>
            <textarea
              name="NeedText"
              className="textarea textarea-accent w-80 h-[30vh]  sm:h-[30rem] md:h-[20vh] lg:w-[40rem] text-md lg:text-2xl "
              placeholder="What need exists for your product, or project?"
              defaultValue={""}
            />
     
          </div>

          <p> image upload here</p>
          </div>
        </ScrollWrapper>

        <ScrollWrapper>
        <div className="glass p-2 mb-[30vh]">
          <div className="form-control pb-5">
          <label className="label">Pitch
    
    </label>
            <textarea
              name="PitchText"
              className="textarea textarea-accent w-80 h-[30vh]  sm:h-[30rem] md:h-[20vh] lg:w-[40rem] text-md lg:text-2xl "
              placeholder="Make your pitch!"
              defaultValue={""}
            />
  
          </div>
          <div className="form-control ">
          <label className="label">Pitch 2
    
    </label>
            <textarea
              name="PitchText2"
              className="textarea textarea-accent w-80 h-[30vh]  sm:h-[30rem] md:h-[20vh] lg:w-[40rem] text-md lg:text-2xl "
              placeholder="Keep making your pitch!"
              defaultValue={""}
            />
      
          </div>
          </div>
        </ScrollWrapper>
        <ScrollWrapper>
          <div className="form-control ">
  
            <textarea
              name="CTA"
              className="textarea textarea-accent w-80 h-[30vh]  sm:h-[30rem] md:h-[20vh] lg:w-[40rem] text-md lg:text-2xl "
              placeholder="Call to action. "
              defaultValue={""}
            />
       
          </div>
        </ScrollWrapper>

        <button className="btn btn-primary">Submit</button>
      </Form>
    </div>
  );
}

export default $make;
