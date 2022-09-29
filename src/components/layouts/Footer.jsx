import {BsGithub, BsLinkedin, BsInstagram} from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import { SiVite, SiReact, SiTailwindcss } from 'react-icons/si'

const Footer = () => {

const linkedIn = "https://www.linkedin.com/in/jhossuan/";
const gitHub = 'https://github.com/Jhossuan'
const instagram = 'https://www.instagram.com/jhossuaxd/?hl=es'
const tiktok = 'https://vm.tiktok.com/ZTdCCJmhs/'


  return (
    <div className="p-6 flex flex-col items-center justify-center" style={{background:'#fff5'}}>
        <div className="container text-center flex flex-col">
        <small>Jhossuan - Frontend Web Deloper.</small>
        <small className='flex mx-auto'>Página web creada con : <SiVite className='text-sm mx-2' /> <SiReact className='text-sm mx-2' /> <SiTailwindcss className='text-sm mx-2' /> </small>
        <small>Ultima actualizacion : 29/09/2022 </small>
        <div className='flex justify-center'>
            <a href={gitHub} target="_blank" without rel="noreferrer"><BsGithub className="mx-2 mt-2" /></a>
            <a href={linkedIn} target="_blank" without rel="noreferrer"><BsLinkedin className="mx-2 mt-2" /></a>
            <a href={instagram} target="_blank" without rel="noreferrer"><BsInstagram className="mx-2 mt-2" /></a>
            <a href={tiktok} target="_blank" without rel="noreferrer"><FaTiktok className="mx-2 mt-2" /></a>
        </div>
        </div>
    </div>
  )
}

export default Footer