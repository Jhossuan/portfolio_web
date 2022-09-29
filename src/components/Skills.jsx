import { FaReact, FaJs, FaHtml5, FaCss3, FaSass, FaNodeJs } from 'react-icons/fa'
import { SiRedux, SiStyledcomponents, SiExpress, SiTailwindcss, SiMongodb, SiMysql } from 'react-icons/si'

const Skills = () => {
  return (
    <div id='stack' className='flex flex-col text-center min-h-screen items-center justify-center md:pt-0 pt-20'>
        <span className='text-xl'>Cuál es mi</span>
        <h1 className="text-5xl font-semibold">Stack Tecnológico</h1>
        <div className='mx-auto container grid_template2 mt-10'>

            <div className='flex flex-row items-center p-3 bg-white text-black rounded-md shadow-md'>
                <FaHtml5 className='text-5xl text-orange-600' />
                <div className='flex flex-col text-left ml-3'>
                    <p className='font-bold'>HTML</p>
                    <p>Intermedio/Avanzado</p>
                </div>
            </div>
            <div className='flex flex-row items-center p-3 bg-white text-black rounded-md shadow-md'>
                <FaCss3 className='text-5xl text-blue-600' /> 
                <div className='flex flex-col text-left ml-3'>
                    <p className='font-bold'>CSS</p>
                    <p>Intermedio/Avanzado</p>
                </div>
            </div>
            <div className='flex flex-row items-center p-3 bg-white text-black rounded-md shadow-md'>
                <FaSass className='text-5xl text-pink-500' /> 
                <div className='flex flex-col text-left ml-3'>
                    <p className='font-bold'>Sass/Scss</p>
                    <p>Intermedio</p>
                </div>
            </div>
            <div className='flex flex-row items-center p-3 bg-white text-black rounded-md shadow-md'>
                <FaJs className='text-5xl text-yellow-500' /> 
                <div className='flex flex-col text-left ml-3'>
                    <p className='font-bold'>Javascript</p>
                    <p>Intermedio</p>
                </div>
            </div>
            <div className='flex flex-row items-center p-3 bg-white text-black rounded-md shadow-md'>
                <SiStyledcomponents className='text-5xl text-pink-500' /> 
                <div className='flex flex-col text-left ml-3'>
                    <p className='font-bold'>Styled Components</p>
                    <p>Intermedio/Avanzado</p>
                </div>
            </div>
            <div className='flex flex-row items-center p-3 bg-white text-black rounded-md shadow-md'>
                <SiTailwindcss className='text-5xl text-blue-600' /> 
                <div className='flex flex-col text-left ml-3'>
                    <p className='font-bold'>Tailwind Css</p>
                    <p>Intermedio</p>
                </div>
            </div>
            <div className='flex flex-row items-center p-3 bg-white text-black rounded-md shadow-md'>
                <FaReact className='text-5xl text-blue-500' /> 
                <div className='flex flex-col text-left ml-3'>
                    <p className='font-bold'>React JS</p>
                    <p>Intermedio/Avanzado</p>
                </div>
            </div>
            <div className='flex flex-row items-center p-3 bg-white text-black rounded-md shadow-md'>
                <SiRedux className='text-5xl text-purple-600' /> 
                <div className='flex flex-col text-left ml-3'>
                    <p className='font-bold'>Redux Toolkit</p>
                    <p>Intermedio</p>
                </div>
            </div>
            <div className='flex flex-row items-center p-3 bg-white text-black rounded-md shadow-md'>
                <FaNodeJs className='text-5xl text-green-700' /> 
                <div className='flex flex-col text-left ml-3'>
                    <p className='font-bold'>Node JS</p>
                    <p>Aprendiendo/Básico</p>
                </div>
            </div>
            <div className='flex flex-row items-center p-3 bg-white text-black rounded-md shadow-md'>
                <SiExpress className='text-5xl text-black' /> 
                <div className='flex flex-col text-left ml-3'>
                    <p className='font-bold'>Express</p>
                    <p>Aprendiendo/Básico</p>
                </div>
            </div>
            <div className='flex flex-row items-center p-3 bg-white text-black rounded-md shadow-md'>
                <SiMongodb className='text-5xl text-green-700' /> 
                <div className='flex flex-col text-left ml-3'>
                    <p className='font-bold'>MongoDB</p>
                    <p>Aprendiendo/Básico</p>
                </div>
            </div>
            <div className='flex flex-row items-center p-3 bg-white text-black rounded-md shadow-md'>
                <SiMysql className='text-5xl text-blue-700' /> 
                <div className='flex flex-col text-left ml-3'>
                    <p className='font-bold'>MySQL</p>
                    <p>Aprendiendo/Básico</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Skills