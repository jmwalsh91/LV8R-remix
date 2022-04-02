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
import ScrollWrapper from "~/components/layoutAndWrappers/ScrollWrapper";
import { getSession } from "~/services/session.server";
import { createPitch, hasPitch, updatePitch } from "~/utils/crud";
import { authenticator } from "~/services/auth.server";

export let action: ActionFunction = async ({ request }) => {
  /* //get user object from sessions instead of params, wherever this occurs. */
  let form = await request.formData()
  let updatedUser = await updatePitch({ form })
  let session = await getSession(request.headers.get("Cookie"))
  session.set("auth:token", updatedUser.username);
  return redirect(`/dashboard/${updatedUser.username}`, {
    headers: { "Set-Cookie": await commitSession(session) },
  });
};

export let loader: LoaderFunction = async ({ request, params }) => {
 let username = params.username
  let pitch = await hasPitch(username)
  console.log("pitch is..")
  console.log(pitch)

  let session = await getSession(request.headers.get("Cookie"))



  return {pitch, username} 
};

type Props = {};

function Edit({}: Props) {


  const data = useLoaderData();
  let username = data.username
  let pitch = data.pitch 

  return (
    <div>


      <Form method="post">
        <input type="hidden" name="pitchId" value={data.pitch.id} />
 
        <ScrollWrapper>
          <div className="glass p-2 mb-[30vh] mt-[20vh]">
          <input
            name="title"
            className="form-control min-w-full"
            placeholder="Name of your product or project"
            defaultValue={pitch.title}
          ></input>

          <div className="form-control ">
            <label className="label">
              Hook!
          
            </label>
            <textarea
              name="HookText"
              className="textarea textarea-accent w-80 h-[30vh]  sm:h-[30rem] md:h-[20vh] lg:w-[40rem] text-md lg:text-2xl "
              placeholder="Catch our interest!"
              defaultValue={pitch.HookText}
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
              defaultValue={pitch.NeedText}
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
              defaultValue={pitch.PitchText}
            />
  
          </div>
          <div className="form-control ">
          <label className="label">Pitch 2
    
    </label>
            <textarea
              name="PitchText2"
              className="textarea textarea-accent w-80 h-[30vh]  sm:h-[30rem] md:h-[20vh] lg:w-[40rem] text-md lg:text-2xl "
              placeholder="Keep making your pitch!"
              defaultValue={pitch.PitchText2}
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
              defaultValue={pitch.CTA}
            />
       
          </div>
        </ScrollWrapper>
        

        <button className="btn btn-primary">Submit</button>
      </Form>
    </div>
  );
}

export default Edit;
