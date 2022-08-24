// src/components/Skills.js

import { BadgeCheckIcon, ChipIcon } from '@heroicons/react/solid'
import React from "react";
import { skills, applicable} from "../data";

export default function Skills() {
  return (
    <section id="skills" className = "bg-gray-900 h-full">
      <div className="container mx-auto flex flex-col justify-center items-center h-screen text-center text-white lg:px-50">
        <div className="text-center text-white mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-5xl text-3xl font-medium title-font text-emerald-600 mb-4">
            Skills & Technologies
          </h1>
        <hr className = "border-emerald-600 mb-4"/>

          <h2 className ="font-medium text-3xl mb-2">Ranking Includes:</h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            
            <ul className = "text-emerald-400 text-xl">
              <li><b>Novice</b> - Has little experience in said skill/technology</li>
              <li><b>Beginner</b> - Learned few components of the skill/technology and is developing in the area</li>
              <li><b>Intermediate</b> - Has acquired the basic knowledge of the skill/technology and can apply it to some projects</li>
              <li><b>Advanced</b> - Has gained the majority of the knowledge of the skill/technology and can apply it to real-world projects</li>
              <li><b>Expert</b> - Is able to use skill/technology in multiple fields of Computer Science and can develop real-world solutions with it</li>
            </ul>
          </p>
        </div>
        <h1 className = "text-5xl text-emerald-600 font-medium mb-5">Technologies</h1>
        <hr className = "border-emerald-600 mb-4"/>
        <div className= "flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        
          
          {skills.map((skill) => (
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill.tech}  <span className = {skill.color}>({skill.ranking})</span>
                </span>
              </div>
            </div>
          ))}
        </div>
        <h1 className = "text-5xl text-emerald-600 font-medium mb-5">Applicable Skills</h1>
        <hr className = "border-emerald-600 mb-4"/>
        
        <div className= "flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          
          {applicable.map((skill) => (
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill.tech}  <span className = {skill.color}>({skill.ranking})</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}