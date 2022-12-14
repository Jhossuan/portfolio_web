import telery1 from '../telery_images/devTelery1.png'
import nodeIsp from '../nodeIsp_images/nodeIsp5.png'
import feedbackImg from '../feedback_images/feedbackApp4.png'
import roundLanding from '../landing_roundOne/roundone1.png'
import konexLanding from '../konex_landing/landingKonex.png'
import snapLanding from '../snap_landing/snap-landing.png'

const projects = [
    {
        id:1,
        title:'Dedicados System',
        description:'Sistema de gestión de clientes, redes y finanzas de la empresa Telery Networks.',
        image:telery1,
        repo:'Repositorio privado',
        hashtag:['#api_rest', '#axios', '#maquetación']
    },
    {
        id:2,
        title:'Node ISP',
        description:'Sistema para la gestión de redes de internet, clientes y demás servicios afines.',
        image:nodeIsp,
        repo:'Repositorio privado',
        hashtag:['#api_rest', '#axios', '#auth']
    },
    {
        id:3,
        title:'Feedback System',
        description:'Aplicación web sencilla, usada por clientes para calificar empleados de la empresa Telery.',
        image:feedbackImg,
        repo:'Repositorio privado',
        hashtag:['#api_rest', '#axios', '#maquetación']
    },
    {
        id:4,
        title:'RoundOne Landing',
        description:'Landing Page de promoción, para servicios de desarrollo en República Dominicana.',
        image:roundLanding,
        repo:'Repositorio privado',
        hashtag:['#react', '#responsive', '#primefaces']
    },
    {
        id:5,
        title:'Konex Landing',
        description:'Página de promoción y de venta de servicios de internet.',
        image:konexLanding,
        repo:'Repositorio privado',
        hashtag:['#react', '#responsive', '#primefaces']
    },
    {
        id:6,
        title:'Snap Landing',
        description:'Página diseñada para un reto de Frontend Mentor.',
        image:snapLanding,
        repo:'https://github.com/Jhossuan/Snap_Landing_Page',
        hashtag:['#react', '#responsive', '#css']
    }
]

export default projects