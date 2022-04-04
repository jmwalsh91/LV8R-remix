import React from 'react'
import lv8rImg from "../../../public/assets/LV8R2.png"
import LogIn from '../Forms/LogIn'
import Register from '../Forms/Register'
import {Link} from "remix"


type Props = {}

function Hero({}: Props) {
  return (
<div className="hero h-screen" style={{backgroundImage: "url(https://cdn.wallpapersafari.com/72/49/6H705l.jpg)"}}>
  {/*   <img src={lv8rImg} alt="lv8r"/>  */}
  <div className="hero-overlay bg-opacity-60" />
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to LV8R</h1>
      <p className="mb-5">I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears in rain.</p>
      <Link to="/logreg"><button className="btn btn-primary">Sign in</button></Link>
      
     {/*  <Register/>
      <LogIn/>
      <BuildPitch/> */}
     
    </div>
  </div>
</div>

  )
}

export default Hero