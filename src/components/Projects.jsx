import projects from "../assets/others/projects"
console.log(projects)

const Projects = () => {


  return (
    <div id="projects" className="flex flex-col pt-20 pb-20 min-h-screen items-center justify-center">
      <span className='text-xl'>Conoce algunos</span>
      <h1 className="text-5xl font-semibold">Proyectos</h1>
      <div className="mx-auto mt-10 container grid_template3">
        
        {
          projects.map(project => {
            const {id, title, description, image} = project
            return (
              <div key={id} className='flex flex-row items-center py-5 px-4 bg-white text-black rounded-md shadow-md'>
                <div className='flex flex-col text-left ml-3 items-center justify-center'>
                    <img src={image} alt={title} className='mr-2' />
                    <p className='font-bold text-2xl mt-3'>{title}</p>
                    <p>{description}</p>
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