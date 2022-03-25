import React, { useEffect, useState, useRef } from "react";
import { Form, Outlet } from "remix";
import Avatar from "../Misc/Avatar";
import { ActionFunction, useActionData } from "remix";

/* import { avatarSubmit } from "~/utils/crud.js";

const handleImage = async ({ request }) => {
  let data = await request.formData();
  let form = await Object.fromEntries(data);
  let imgIndex = await avatarSubmit(form.avatar);
  if (!imgIndex || "undefined") {
    throw ErrorEvent;
  } else {
    alert("success");
    return imgIndex;
  }
}; */

type Props = {};

function RegisterPicUsername({}: Props) {
  let avatarImg = "https://api.lorem.space/image/face?hash=3174";

  /*  const [showImg, setShowImg] = useState()
    const [available, setAvailable] = useState()
    const imgRef = useRef()


    useEffect(()=>{
       
    }[showImg])

function handlePic(){
    
    let imgIndex = await avatarSubmit(form.avatar);
    if (!imgIndex || "undefined") {
      throw ErrorEvent;
    } else {
      alert("success");
      return imgIndex;
    }
  };
} */
  return (
    <>
      
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
         
          ></textarea>
          </label>
          </div>
      <div className="container flex-col justify-end">
      <button className="btn btn-outline btn-primary">Submit</button>
            </div>
        </div>

    </>
  );
}

export default RegisterPicUsername;
