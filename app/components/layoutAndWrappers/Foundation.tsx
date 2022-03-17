import React from 'react'

type Props = {
    children?: Element
}

function Foundation ({children}: Props) {
  return (
    <div className="container flex w-screen items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500" >
        {children}
    </div>
  )
}

export default Foundation