//import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-emerald-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-col justify-center items-center h-screen text-center text-white lg:px-40">
        <div className="flex flex-col text-center w-full mb-20">
          
          <h1 className="sm:text-5xl text-emerald-600 text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 text-2xl mx-auto leading-relaxed">
            These are projects that have contributed to my career as technical experience. They are the building blocks to my success in the Computer Science field.
            <p className = "mt-3 text-emerald-400"><i>Hover over project images for more information</i></p>
            
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img 
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src= {project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-m title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-lg">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}