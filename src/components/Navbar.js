import React from "react";
import {Link} from 'react-router-dom'
var { SocialIcon } = require('react-social-icons');

export default function Navbar() {
  return (
    <header className="bg-gray-900 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="/" className="ml-3 text-3xl font-cursive italic">
            Brandon Soto Garcia
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap text-gray-500 text-2xl font-medium items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-white">
            Home
          </Link>
          <Link to="/about" className="mr-5 hover:text-white">
            About
          </Link>
          <Link to="/projects" className="mr-5 hover:text-white">
            Projects
          </Link>
          <Link to="/skills" className="mr-5 hover:text-white">
            Skills
          </Link>
          
          
        </nav>
        <ul className = "inline-block">
                    <li className = "inline-block mr-5"><SocialIcon url="https://linkedin.com/in/jaketrent" fgColor="white" /></li>
                    <li className = "inline-block mr-10"><SocialIcon url="https://github.com/BrandonMager" fgColor="white"/></li>
                </ul>
        <Link
          to="/contact"
          className="inline-flex items-center text-white bg-gray-800 border-0 py-1 px-3 font-medium focus:outline-none hover:bg-white hover:text-black rounded text-base mt-4 md:mt-0">
          Contact Me
          
        </Link>
      </div>
    </header>
  );
}