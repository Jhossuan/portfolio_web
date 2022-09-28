import { useState } from "react"
import { HiMenuAlt3, HiMenu } from 'react-icons/hi'
import { TbMessage2Code } from 'react-icons/tb'

const Navbar = () => {

    const [active, setActive] = useState(false)

  return (
    <div>
        <div className={`flex p-2 lg:justify-around lg:shadow-none justify-between items-center fixed hover:bg-white hover:text-black w-screen lg:bg-transparent ${active && 'bg-white'} ${active && 'text-black'} transition-all duration-500`} style={{backdropFilter:'blur(1px)', zIndex:'999'}}>
            <div className="text-2xl flex uppercase items-center">
                <TbMessage2Code className=" text-4xl text-violet-500" />
                <a href="#" onClick={()=>setActive(false)}>
                    <p className="font-semibold ">Jhossuan</p>
                </a>
            </div>
            <ul className={`flex lg:flex-row lg:items-center items-start p-3 flex-col lg:relative absolute lg:top-auto lg:left-auto lg:right-auto lg:transition-none transition-all duration-300 ease-in ${active ? 'top-[50px]':'top-[-490px]'} left-0 right-0 gap-6 lg:bg-transparent bg-white`}>
                <a href="#about" className="cursor-pointer hover:underline text-xl" onClick={()=>setActive(false)}>Sobre mí</a>
                <a href="#" className="cursor-pointer hover:underline text-xl" onClick={()=>setActive(false)}>Proyectos</a>
                <a href="#" className="cursor-pointer hover:underline text-xl" onClick={()=>setActive(false)}>Contáctame</a>
                <a href="#" className="lg:hidden cursor-pointer text-white hover:shadow-none shadow-lg text-lg active:bg-violet-600 hover:bg-violet-700 hover:shadow-gray-800 bg-violet-600 px-6 py-2 rounded-3xl" onClick={()=>setActive(false)}>Descargar CV</a>
            </ul>
            <ul className="items-center hidden lg:flex">
                <li className="cursor-pointer text-white hover:shadow-none shadow-lg text-lg active:bg-violet-600 hover:bg-violet-700 hover:shadow-gray-800 transition-all duration-300 bg-violet-600 px-6 py-2 rounded-3xl">Descargar CV</li>
            </ul>
            <div className="lg:hidden">
                {
                    active ?
                    <HiMenu className="text-3xl cursor-pointer mr-2" onClick={()=>setActive(!active)} />
                    : <HiMenuAlt3 className="text-3xl cursor-pointer mr-2" onClick={()=>setActive(!active)} />
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar