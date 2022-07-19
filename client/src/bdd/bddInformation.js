import {AiFillClockCircle} from 'react-icons/ai'
import {VscSmiley} from 'react-icons/vsc'
import {FaUserTie, FaMapMarked} from 'react-icons/fa'
import {ImShield} from 'react-icons/im'
import {RiVirusLine} from 'react-icons/ri'


const informationEngagement = [
  [
  {
    id: Math.random(),
    image: <AiFillClockCircle className='logo-information' size="100px"/>,
    titre: "Ponctualité",
    text: "“Rien ne sert de courir, il faut partir à point.”"
  },
  {
    id: Math.random(),
    image: <VscSmiley className='logo-information' size="100px" />,
    titre: "Convivialité",
    text: "Un chauffeur convivial pour un trajet agréable"
  },
  {
    id:Math.random(),
    image: <FaUserTie className='logo-information' size="100px" />,
    titre: "Rigueur",
    text: "La rigueur est une des choses les plus importantes"
  },
],
[
  {
    id: Math.random(),
    image: <ImShield className='logo-information' size="100px" />,
    titre: "Normes conducteur",
    text: "Nous respectons les normes pour vous assurer un trajet professionnel"
  },
  {
    id: Math.random(),
    image: <FaMapMarked className='logo-information' size="100px" />,
    titre: "Traçabilité",
    text: "Une traçabilité de chacun de vos trajets"
  },
  {
    id: Math.random(),
    image: <RiVirusLine className='logo-information' size="100px" />,
    titre: "Covid-19",
    text: "Chaque règle est respectée pour votre sécurité"
  },
]
]
export default informationEngagement