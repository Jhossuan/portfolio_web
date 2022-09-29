import Button from "./layouts/Button"
import InputText from "./layouts/InputText"
import Textarea from "./layouts/Textarea"
import { AiOutlineMail } from 'react-icons/ai'
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { FaInstagramSquare } from "react-icons/fa"
import Swal from "sweetalert2"
import emailjs from '@emailjs/browser'
import { useRef } from "react"

const Contact = () => {

  const linkedIn = "https://www.linkedin.com/in/jhossuan/";
  const gitHub = 'https://github.com/Jhossuan'
  const instagram = 'https://www.instagram.com/jhossuaxd/?hl=es'

  const form = useRef()

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const sendEmail = (e) => {
    console.log('Hola xd')
    e.preventDefault();

    emailjs.sendForm(
      "service_8vtwh6w",
      "template_z1obo4d",
      form.current,
      "VX5Z4ZqouF0hGc2EC"
    );

    e.target.reset();

    Toast.fire({
      icon: 'success',
      title: 'Tu mensaje ha sido enviado.'
    })


  };

  return (
    <div id="contact" className="min-h-screen flex flex-col justify-center items-center">
        <div className="grid lg:grid-cols-2 grid-cols-1 w-full container">
          <div className="flex flex-col justify-center items-center">
            <span className='text-xl'>Pongamonos en</span>
            <h1 className="text-5xl font-semibold">Contacto</h1>

              <div className='flex flex-row items-center justify-center icons_contact mt-2'>
                <a href={linkedIn} target='_blank'><BsLinkedin className='text-2xl mx-1'/></a>
                <a href={gitHub} target='_blank'><BsGithub className='text-2xl mx-1'/></a>
                <a href={instagram} target='_blank'><FaInstagramSquare className='text-2xl mx-1'/></a>
              </div>

          </div>
          <div>
            <div className="lg:text-left text-center lg:mt-0 my-6">
              <h1 className="text-xl">Hola 👋🏽, ¿Qué tal todo?</h1>
              <p>Enviame un mail dandome tu feedback, recomendaciones o la oportunidad de trabajar, aprender y crecer junto a tu empresa.</p>
            </div>
            <form onSubmit={sendEmail} ref={form} className="flex flex-col mt-6 p-6 rounded-md shadow-md w-full" style={{background:'#fff3'}}>
                <InputText placeholder='Tu nombre *' name='name' />
                <InputText placeholder='Email *' name='email' type='email' />
                <Textarea placeholder='Mensaje' Style='h-40' name='message' />
                <Button label='Enviar' Style='text-center' type='submit' />
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact