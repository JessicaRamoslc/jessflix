import React from 'react'
import Logo from '../../assets/img/Logo.png'
import "../Menu/Menu.css"
import Button from "../Button"
//import ButtonLink from './components/ButtonLink'



export default function Menu (){
    return(
        <nav className="Menu">
           <a href="/">
                <img className="Logo" src={Logo} alt="Jessflix logo" />
           </a>
           <Button as="a" className="ButtonLink" href="/" >Novo vídeo</Button>
                
           
        </nav>
    )
}