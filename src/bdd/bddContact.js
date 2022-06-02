// import imgTel from '../assets/icones/tel.png'
// import imgMail from '../assets/icones/mail.png'
// import imgMap from '../assets/icones/map.png'

import {GiPhone} from 'react-icons/gi'
import {GrMail} from 'react-icons/gr'
import {FaMapMarkerAlt} from 'react-icons/fa'

const cardContact = [
  {
    id: Math.random(),
    image: <GiPhone color="#fff" size="30px" />,
    titre: "07-60-48-44-24"
  },
  {
    id: Math.random(),
    image: <GrMail color="#fff" size="30px" />,
    titre: "miramon.vtc@gmail.com"
  },
  {
    id: Math.random(),
    image: <FaMapMarkerAlt color="#fff" size="30px" />,
    titre: "Paris"
  },
]

export default cardContact