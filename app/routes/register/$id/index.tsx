import React from 'react'
import RegisterPicUsername from '~/components/Forms/RegisterPicUsername'
import { useLoaderData, Form, ActionFunction } from 'remix' 



type Props = {}

function RegisterUsername({}: Props) {
  return (
<>
<RegisterPicUsername/>
</>    
  )
}

export default RegisterUsername 