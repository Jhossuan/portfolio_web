import { BsChevronDoubleDown, BsGithub, BsLinkedin} from 'react-icons/bs'
import { FaInstagramSquare } from 'react-icons/fa';
import Button from './layouts/Button'

const Home = () => {

  const linkedIn = "https://www.linkedin.com/in/jhossuan/";
  const gitHub = 'https://github.com/Jhossuan'
  const instagram = 'https://www.instagram.com/jhossuaxd/?hl=es'

  return (
    <div className="flex flex-col justify-center items-center min-h-screen pt-20">
        <div className='container text-center flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className="sm:text-7xl text-6xl font-bold">Frontend Web Developer</h1>
                <p className='sm:text-2xl text-xl sm:w-8/12 w-auto my-5'>Hola 👋🏽, soy <span className='underline font-semibold'>Jhossuan</span>. Desarrollador web, apasionado por la tecnología, las nuevas aventuras y el aprendizaje constante.</p>
                <a href='#about'>
                  <Button label='Conocer Más' Style='w-40 text-center mt-2' />
                </a>
            </div>
        </div>
        <a href='#contact'>
          <BsChevronDoubleDown className='text-4xl cursor-pointer arrow_float mt-10'/>
        </a>
        <div className='header__socials md:flex hidden'>
          <a href={linkedIn} target='_blank'><BsLinkedin className='icons-social'/></a>
          <a href={gitHub} target='_blank'><BsGithub className='icons-social'/></a>
          <a href={instagram} target='_blank'><FaInstagramSquare className='icons-social'/></a>
        </div>
    </div>
  )
}

export default Home