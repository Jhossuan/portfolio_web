import {FiAward} from 'react-icons/fi'
import {GiComputing} from 'react-icons/gi'
import {VscFolderLibrary} from 'react-icons/vsc'
import Button from './layouts/Button'
import Skills from './Skills'

const About = () => {
  return (
    <div id="about" className="flex flex-col md:pt-0 pt-20 min-h-screen justify-center items-center">
        <div className='flex flex-col text-center'>
            <span className='text-xl'>Conoce más</span>
            <h1 className="text-5xl font-semibold">Sobre mí</h1>
        </div>
        <div className='container grid lg:grid-cols-2 justify-center items-center mt-6'>
            <div className='lg:flex hidden lg:mr-2 mr-0 mb-2'>
                <img className='shadow-md' src='https://media4.giphy.com/media/JyxdzuAaxZnPH7TyRd/giphy.gif?cid=ecf05e47g9m8gkbhehjr84z9vaifo6x8mjduyvdkl5g5rvg9&rid=giphy.gif&ct=g' alt='Gif Developer' />
            </div>
            <div className='flex flex-col md:mt-0 mt-5'>
                <div className='grid_template'>
                    <div className='px-2 py-4 flex flex-col justify-center items-center rounded-md shadow-md mb-3 bg-white text-black'>
                        <GiComputing className='text-4xl mb-2' />
                        <div className='flex flex-col text-center'>
                            <h2 className='text-xl text-purple-600 font-semibold'>Experiencia</h2>
                            <p className='text-sm'>+10 meses de estudio</p>
                            <p>+4 meses de trabajo</p>
                        </div>
                    </div>
                    <div className='px-2 py-4 flex flex-col justify-center items-center rounded-md shadow-md mb-3 bg-white text-black'>
                        <VscFolderLibrary className='text-4xl mb-2' />
                        <div className='flex flex-col text-center'>
                            <h2 className='text-xl text-purple-600 font-semibold'>Proyectos</h2>
                            <p className='text-sm'>+11 proyectos personales</p>
                            <p className='text-sm'>+4 proyectos reales</p>
                        </div>
                    </div>
                    <div className='px-2 py-4 flex flex-col justify-center items-center rounded-md shadow-md mb-3 bg-white text-black'>
                        <FiAward className='text-4xl mb-2' />
                        <div className='flex flex-col text-center'>
                            <h2 className='text-xl text-purple-600 font-semibold'>Habilidades</h2>
                            <p className='text-sm'>Autodidacta e investigador.</p>
                        </div>
                    </div>
                </div>
                <p className='text-xl text-white'>
                    Hola, soy Jhossuan. Desarrollador web frontend con más de 16 semanas de experiencia laboral, mis principales tareas son la maquetación de sitios web y   aplicaciones, consumo y gestión de API REST, optimización y mantenimiento de otras aplicaciones web y mucho más.
                </p>
                <a href='#projects'><Button Style='w-40 text-center mt-2' label='Ver Proyectos' /></a>
            </div>
        </div>
    </div>
  )
}

export default About