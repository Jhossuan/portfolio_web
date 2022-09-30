import projects from "../assets/others/projects"
import { BsGithub } from 'react-icons/bs'

const Projects = () => {


  return (
    <div id="projects" className="flex flex-col pt-20 pb-20 min-h-screen items-center justify-center">
      <span className='text-xl'>Conoce algunos</span>
      <h1 className="text-5xl font-semibold">Proyectos</h1>
      <p className="mt-2">Para conocer más, <a href="https://github.com/Jhossuan" target='_blank' className="underline text-yellow-500">visita mi GitHub</a> 😁</p>
      <div className="mx-auto mt-10 container grid_template3">
        
        {
          projects.map(project => {
            const {id, title, description, image, repo, hashtag} = project
            return (
              <div key={id} className='flex flex-row items-center pt-5 pb-4 px-4 bg-white text-black rounded-md shadow-md'>
                <div className='flex flex-col text-left ml-3 items-center justify-center'>
                    <img src={image} alt={title} className='mr-2 rounded-sm shadow-md' />
                    <p className='font-bold text-2xl mt-3'>{title}</p>
                    <p>{description}</p>
                    {
                      repo === 'Repositorio privado' ?
                      <small className="py-1 px-3 mt-2 rounded-md shadow-md bg-purple-600 text-white flex items-center"><BsGithub className="mr-1" />{repo}</small>
                      : <a href={repo} target='_blank' className="py-1 text-sm px-3 mt-2 rounded-md shadow-md bg-purple-600 text-white flex items-center"><BsGithub className="mr-1" /> Ver código</a>
                    }
                      <div className="grid_template4 w-full mt-3 mb-2 flex justify-center">
                    {
                      hashtag.map((hash, index) => {
                        return (
                          <small key={index} className=" text-gray-500 text-xs text-center">{hash}</small>
                          )
                        })
                      }
                      </div>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Projects