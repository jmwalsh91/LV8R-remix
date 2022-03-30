import React, { useState } from 'react'
import {Form, ActionFunction, Link, LoaderFunction, useLoaderData} from 'remix'
import BuildPitch from '~/components/Forms/BuildPitch'
import BuildPitch2 from '~/components/Forms/BuildPitch2'
import BuildPitch3 from '~/components/Forms/BuildPitch3'
import { getSession } from '~/services/session.server'
import { createPitch } from '~/utils/crud'


export let action: ActionFunction = async({request}) => {
//get user object from sessions instead of params, wherever this occurs.
let form = await request.formData()
let updatedUser = await createPitch({form})
return updatedUser
}

export let loader: LoaderFunction = async({params}) => {
    return params.username
}

type Props = {}

function $make({}: Props) {
    //most likely better to have scroll on y-axis than to build pitch over successive pages. Can get rid of state, here. 
    const [page, setPage] = useState(1)
    const username = useLoaderData()
  return (
      <div>
    <div className="container justify-center lg:text-sm">
          <h2 className="sm:pl-1 card-title ">Build your pitch.</h2>
  <ul className="steps steps-horizontal min-w-full">
  <li className="step step-primary">Pitch Hook</li>
  <li className="step">Pitch Body </li>
  <li className="step">Pitch Outro</li>
</ul>
</div>
<Form method="post">
    <input type="hidden" name="username" value={`${username}`}/>
 <BuildPitch setPage={setPage}/>
 <BuildPitch2 setPage={setPage}/>
 <BuildPitch3 setPage={setPage}/>
<button className="btn btn-primary">Submit</button>
 </Form>
  </div>


         )
}

export default $make