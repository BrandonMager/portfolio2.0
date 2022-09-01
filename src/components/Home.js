import {Link} from 'react-router-dom'
export default function Home(){
    return(
        <section id = "home" className = "bg-gray-900">
            <div className = "container mx-auto flex flex-col justify-center items-center h-screen text-white">
                <div className = "flex flex-col text-left">
                    <h1 className = "text-2xl font-medium mb-4 px-1">Greetings, my name is ...</h1>
                    <h1 className = "text-8xl font-medium text-emerald-600 mb-4">Brandon Soto Garcia.</h1>
                    <h2 className = "text-5xl font-medium text-gray-200 px-1">I create applications and study Computer Science.</h2>
                </div>
            <div className = "flex sm:pl-56 sm:self-start mt-10">
                <Link
              to="/about"
              className="text-white font-medium bg-emerald-600 border-0 py-4 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
              About Me
            </Link>
            <Link
              href="/projects"
              className="ml-4 text-gray-400 bg-gray-800 border-0 py-4 px-8 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Projects
            </Link>
                </div>
            </div>
        </section>
    )
}