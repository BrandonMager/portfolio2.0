import {harvey} from "../data"
export default function About(){
    return(
        <section id = "about" className = "bg-gray-900">
            <div className = "container mx-auto flex flex-col justify-center items-center h-screen text-white">
                <div className = "flex text-white">
                    <h1 className = "text-6xl font-medium text-emerald-600">About</h1>
                </div>
                
                <hr className = "w-full mx-auto my-4"/>

                <div className = "sm:flex justify-center items-center flex-row text-white mx-auto my-5 ">
                    <div className = "flex flex-col my-16 w-1/2">
                        <p className = "text-xl mb-5">
                            Hi, I am Brandon who is currently studying Computer Science. I enjoy making applications and helping others with their code!
                        </p>
                        <p className = "text-xl mb-5">
                        I am a Computer Science student at UC Irvine based in California who studies Software Engineering projects and contributes to open-source projects on GitHub. 

                        </p>
                        <p className = "text-xl mb-5">
                        My unique goal is to solve real-world problems through code and developing algorithms.
                        When not working, you can find me playing soccer and other sports. 
                        </p>
                        <p className = "text-xl">
                        I am actively looking for recruiters for internship opportunities in Computer Science positions.  
                        </p>
                    </div>
                    <div className = "flex mx-auto">
                        <img className = "object-cover object-center rounded"src = {harvey} alt = "person"/>
                    </div>
                </div>
            </div>
        </section>
    )
}