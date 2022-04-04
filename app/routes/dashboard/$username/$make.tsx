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
import { createPitch, hasPitch } from "~/utils/crud";
import { authenticator } from "~/services/auth.server";
import UploadHookImg from "~/components/Forms/UploadHookImg";
import UploadPitchImg from "~/components/Forms/UploadPitchImg";
import { unstable_parseMultipartFormData } from "remix";
import { uploadHandler } from "../../../utils/uploadHandler"

export let action: ActionFunction = async ({ request }) => {
  /* //get user object from sessions instead of params, wherever this occurs. */

  let form = await request.formData();
  console.log(form)
  let updatedUser = await createPitch({ form });


  let session = await getSession(request.headers.get("Cookie"));
  session.set("auth:token", updatedUser.data[0].username);

  return redirect(`/dashboard/${updatedUser.data[0].username}`, {
    headers: { "Set-Cookie": await commitSession(session) },
  });
};

export let loader: LoaderFunction = async ({ request, params }) => {
 let username = params.username
  let pitch = await hasPitch(username)
  console.log("pitch is..")
  console.log(pitch)

  let session = await getSession(request.headers.get("Cookie"))
/*   let username = session.data["auth:token"]
  console.log(username)
  console.log("is username") */



  /*   let username = session.data["auth:token"].username) */

  return {pitch, username} 
};

type Props = {};

function $make({}: Props) {


  const data = useLoaderData();
  let username = data.username
  let pitch = JSON.stringify(data.pitch) 

  return (
    <div className="justify-center content-center items-center">


      <Form method="post">
        <input type="hidden" name="username" value={`${username}`} />
 
        <ScrollWrapper>
          <div className="glass p-2 mb-[5vh] mt-[5vh]">
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
   {/*        <UploadHookImg/> */}
          </div>
        </ScrollWrapper>
        <ScrollWrapper>
        <div className="glass p-2 mb-[5vh]">
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

      
          </div>

          <div>
           <div className="text-2xl w-80 lg:[40rem]">Upload an image that the user will see before you make the final part of your pitch</div>
 {/*           <UploadPitchImg/> */}
 
          </div>
        </ScrollWrapper>

        <ScrollWrapper>
        <div className="glass p-2 mb-[5vh]">
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
        
<div className="flex flex-col items-end mt-2 mb-10">
        <button className="btn btn-primary ">Submit</button>
        </div>
      </Form>
    </div>
  );
}

export default $make;
