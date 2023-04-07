import {FaFacebook, FaInstagram} from 'react-icons/fa'

import './Footer.css'

function Footer() {
    return (
    <footer className='footer'>
        <ul className='social_list'>
            <li><FaFacebook /></li>
            <a href='https://www.instagram.com/leo_dotta26'
            target="_blank"
            body="hello world"
            rel="noopener noreferrer">
            <li><FaInstagram /></li>
            </a>
        </ul>
        <p className='copy_right'><span>Deusdete Store</span> &copy; 2023</p>
    </footer>
  )
}

export default Footer