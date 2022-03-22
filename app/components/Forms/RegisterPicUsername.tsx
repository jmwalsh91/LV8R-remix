import React from 'react'
import { Form } from 'remix'
import Avatar from '../Misc/Avatar'

type Props = {}

function RegisterPicUsername({}: Props) {
  return (
    <div className="card w-96 bg-neutral ">
    <div className="card-body flex-col justify-stretch content-around space-y-3 ">
      <h2 className="card-title">Register.</h2>
      <Form method="post" name="RegisterForm">
      <div className="container flex-col items-center">
        <Avatar image={"https://api.lorem.space/image/face?hash=3174"} />

        <form action="/action_page.php">
          <input type="file" id="myFile" name="filename" />
        </form>
    <span>Username</span>
    <input type="text" name="username" placeholder="Your username" className="input input-bordered"/>
    </div></Form></div></div>
    
 

  )
}

export default RegisterPicUsername