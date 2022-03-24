import React, { useEffect, useRef, useState } from "react";
import RegisterPicUsername from "~/components/Forms/RegisterPicUsername";
import {
  useLoaderData,
  Form,
  ActionFunction,
  useActionData,
  unstable_parseMultipartFormData,
  useParams,
  json,
  LoaderFunction,
} from "remix";
import { dbClient } from "../../../utils/supabaseClient.js";
import { uploadHandler } from "../../../utils/uploadHandler";
import { avatarSubmit } from "~/utils/crud.js";
import { Outlet } from "remix";
import { authenticator } from "~/services/auth.server.js";
import UploadAvatar from "~/components/register/UploadAvatar.js";
import { redirect } from "remix";
import Avatar from "~/components/Misc/Avatar.js";

export let action: ActionFunction = async ({ request, context }) => {
  const fileToUpload = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );
  let user = await authenticator.authenticate("form-create-user", request, {
    failureRedirect: "/",
    context: {
      message: "hello"
    },
  });
  if (user) {
   /*  return redirect(`/dashboard/${user[0]}` )*/
   return redirect('/dashboard');
  }
};

/*   let data = await request.formData();
    console.log("data")
    console.log(request.headers)
    let form = await Object.fromEntries(data);
    console.log(form) */
/*  let imgIndex = await avatarSubmit(form.avatar);
    if (!imgIndex || "undefined") {
      throw ErrorEvent;
    } else {
      alert("success");
      return imgIndex;
    } */

export let loader: LoaderFunction = async ({ params }) => {
  console.log(params.id);
  return params.id;
};
type Props = {
  params: any;
};

function RegisterUsername({ params }: Props) {
  const paramId: any = useLoaderData()

  const [preview, setPreview] = useState<string>(
    "https://api.lorem.space/image/face?hash=92310"
  );
  const imgUploadRef: any = useRef();

  const handlePreviewClick = async (e: any) => {
    e?.preventDefault();
    if (imgUploadRef.current.files.length === 1) {
      let previewImage = await URL.createObjectURL(
        imgUploadRef.current.files[0]
      );
      setPreview(previewImage);
    }
  };
  return (
    <div className="card w-96 bg-neutral ">
      <div className="card-body flex-col justify-stretch content-around space-y-3 ">
        <p className="text-xl"> Create profile.</p>
        <Form method="post" name="CreateUser" encType="multipart/form-data">
          
            <input type="hidden" name="id" value={paramId} />
          

          <div className="container p-2 flex ring-offset-2 ring-2">
            <div>
              <Avatar image={preview} />
            </div>

            <input
              type="file"
              id="myFile"
              name="avatar"
              ref={imgUploadRef}
              accept="image/png, image/jpeg"
            />
            <button
              value="avatarButton"
              className="btn btn-glass"
              onClick={(e) => handlePreviewClick(e)}
            >
              Preview
            </button>
          </div>

          <div className="container flex-col place-content-evenly  p-2 space-y-2">
            <div className="container place-content-stretch">
              <span>Username</span>
              <input
                type="text"
                name="username"
                placeholder="Your username"
                className="input input-bordered"
              />
            </div>
            <div>
              <label className="input-group input-group-vertical">
                <span>Bio</span>
                <textarea
                  className="textarea textarea-accent"
                  placeholder="Where your grandma stay"
                  maxLength={200}
                  name="bio"
                ></textarea>
              </label>
            </div>
            <div className="container flex-col justify-end">
              <button className="btn btn-outline btn-primary">Submit</button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default RegisterUsername;

//$id/$default [index.tsx]
/* 
import Avatar from '../../../../components/Misc/Avatar'
type Props = {}

function index({}: Props) {
    let avatarImg="img"
  return (
      <><Avatar image={avatarImg} />
<form>
    <form action="/action_page.php" />
      <input type="file" id="myFile" name="avatar" />
      <button value="avatarButton" className="btn btn-glass">Preview</button>
    </form>
    </>

  )
}

export default index */
