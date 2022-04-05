import React from 'react'
import { ActionFunction, Form, LoaderFunction, redirect, useLoaderData } from 'remix';
import {deleteUserPitch} from '../../../utils/crud'
type Props = {}
export let loader: LoaderFunction = async ({ request, params }) => {
    let user = params.username;

    return user;
  };
  
  export let action: ActionFunction = async ({ request }) => {
      let form = await request.formData()
      let username = await form.get("username")
     let deleteResult = await deleteUserPitch(username)
      return redirect("/dashboard/" + username)
  }


function DeletePitch({}: Props) {
    let username = useLoaderData()
  return (
    <div>
        <div className="text-4xl">
            Are you sure you would like to delete your pitch, {username} ?

        </div>
        <Form method="post">
            <input type="hidden" name="username" value={username}/>
        <button type="submit" className='btn btn-warning'>Yes. Delete.</button>
        </Form>
    </div>
  )
}

export default DeletePitch