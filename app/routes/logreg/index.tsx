import React, { useState } from 'react'
import Register from '~/components/Forms/Register'
import LogIn from '~/components/Forms/LogIn'
import Foundation from '~/components/layoutAndWrappers/Foundation'

type Props = {}

function LoginRegister({}: Props) {
    const [reg,setReg] = useState(false)

  return (
    <Foundation>
    {reg === true?  <Register/> : <LogIn setReg={setReg}/>} 
    </Foundation>
  )
}

export default LoginRegister