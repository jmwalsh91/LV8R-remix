import React, { useState } from 'react'
import {Form, ActionFunction, Link, LoaderFunction, useLoaderData} from 'remix'
import BuildPitch from '~/components/Forms/BuildPitch'
import BuildPitch2 from '~/components/Forms/BuildPitch2'
import BuildPitch3 from '~/components/Forms/BuildPitch3'
import CreatePitch from '~/components/Forms/CreatePitch'
import ScrollWrapper from '~/components/layoutAndWrappers/ScrollWrapper'
import EndCard from '~/components/pitch/EndCard'
import HookCard from '~/components/pitch/HookCard'
import NeedCard from '~/components/pitch/NeedCard'
import PitchCard from '~/components/pitch/PitchCard'
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

    const username = useLoaderData()
  return (
      <div>

          <h2 className="sm:pl-1 card-title ">Build your pitch.</h2>
  <ul className="steps steps-horizontal min-w-full">
  <li className="step step-primary">Pitch Hook</li>
  <li className="step">Pitch Body </li>
  <li className="step">Pitch Outro</li>
</ul>

<Form method="post">
    <input type="hidden" name="username" value={`${username}`}/>
    <ScrollWrapper>
      <HookCard hookText='this is the hook text' imageUrl='this is an image'/>
    </ScrollWrapper>

    <ScrollWrapper>
    <NeedCard needText='this is the need text' imageUrl='this would be an image'/>
    </ScrollWrapper>

 
  
    <ScrollWrapper>
    <PitchCard pitchText='this would be the first text of the pitch' pitchText2='second text of the pitch here'/>
    </ScrollWrapper>

    <ScrollWrapper>
      <EndCard/>
    </ScrollWrapper>
<CreatePitch/> 
<button className="btn btn-primary">Submit</button>
 </Form>
  </div>


         )
}

export default $make