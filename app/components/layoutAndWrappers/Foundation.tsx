import React from 'react'

type Props = {
    children?: any
}

function Foundation ({children}: Props) {
  return (
    <div className="container flex flex-grow w-screen items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500" >
        {children}
    </div>
  )
}

export default Foundation