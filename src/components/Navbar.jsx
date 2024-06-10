import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";



const Navbar = () => {
  return (
    
      <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
        <h1 className='font-bold hover:decoration-2  bg-neutral-900'>Portfolio</h1>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">

        <a href="https://www.linkedin.com/in/yash-namdev-29b865213" target="_blank" rel="noopener noreferrer">
  <FaLinkedin />
</a>
<a href="https://github.com/yash25512" target="_blank" rel="noopener noreferrer">
  <FaGithub />
</a>
<a href="/" target="_blank" rel="noopener noreferrer">
  <FaSquareXTwitter />
  </a>
  <a href="https://leetcode.com/u/namdevy799/" target="_blank" rel="noopener noreferrer">
  <TbBrandLeetcode />
</a>
<a href="https://www.instagram.com/_yash2512_?" target="_blank" rel="noopener noreferrer">
  <FaInstagram />
</a>

        </div>
      </nav>
    
  )
}

export default Navbar
