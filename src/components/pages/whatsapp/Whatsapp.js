import {BsWhatsapp} from 'react-icons/bs'
import './Whatsapp.css'

import React from 'react'

const Whatsapp = ()=> {
   return (
       <div>
            <p className='p'>Entre em contato pelo Whatsapp para comprar diretamente com o vendedor. 
                             Para isso, aperte no ícone do Whatsapp!
                             <div className='div_wpp'>
                                <a className='whatsapp_float'
                                    href="https://wa.me/5516988325027?text=Ol%C3%A1!"
                                    target="_blank"
                                    body="hello world"
                                    rel="noopener noreferrer"
                                >
                                    <BsWhatsapp />
                                </a>
                            </div>
            </p>
       </div>
   )
}

export default Whatsapp