import React from 'react'
import { Link } from 'react-router-dom';
import hero from "../../assets/images/hero.png"
import "./Landing.css"
const Landing = () => {
  return (
    <div className='hero'>
      <div className='intro-text'>
        <h1>
          <span className='tagline1'> Organize word and life </span>
          <span className='tagline2'> finally </span>
        </h1>

        <p>
          hi heehwuhf jhfvg huh uhhgfuywe ushdgedf hy <br />
          hi heehwuhf jhfvg huh uhhgfuywe ushdgedf hy
        </p>

        <Link className="btn red" to="/register"> Register Now!</Link>
        <Link className="btn blue" to="/login"> Login</Link>

      </div>
      
      <div className=''>
        <img src={hero} alt='heroimage' width={"100%"} height={515} />
      </div>
    </div>
  )
}  

export default Landing

