import { FaInstagram } from 'react-icons/fa'

import './Footer.css'

function Footer() {
    return (
    <footer className='footer'>
        <ul className='social_list'>
            <a className='social_list_instagram' href='https://www.instagram.com/limatudoparasalao'
            target="_blank"
            body="hello world"
            rel="noopener noreferrer">
            <li><FaInstagram /></li>
            </a>
        </ul>
        <p className='copy_right'><span>Lima - Tudo para salão</span> &copy; 2023</p>
    </footer>
  )
}

export default Footer