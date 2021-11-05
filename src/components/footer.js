import React  from "react";
import { Link } from "wouter";
import "./../assets/Css/footer.css"
import { FaInstagram , FaGithub , FaSteam , FaLinkedin } from 'react-icons/fa';

export default function Footer(){
    
   return(
       <>
        <footer className="footer">

            <div className="conteiner">
               <div className="conteiner-left">
                  <div className="divlogo">
                    <img className="logo"src="https://www.eest5lanus.edu.ar/imgs/logo1.png" alt="Kennedy"/>       
                    <h5 className="division">7°4</h5>
                  </div>

              
                    <div className="divsocial">
                    <Link href=""> <h1>Aviso de privacidad</h1> </Link>
                    <Link href=""> <h1>Contacto</h1> </Link>
                    <Link href=""> <h1>Sobre nosotros</h1> </Link>
                    </div>
                    <div className="divsocial">
                      <Link href=""> <h1>Ayuda</h1> </Link>
                      <Link href=""> <h1>Preguntas frecuentes</h1> </Link>
                      <Link href=""> <h1>Términos y condiciones</h1> </Link>
                    </div>
                  
              </div>
              <div className="conteiner-right">

                <div className="conteiner-names">

                  <div className="container-user">
                    <p className="p">Torres E. Lucas</p>
                    <a href="https://www.instagram.com/_sr_luc4s_/"><FaInstagram/></a>
                    <a href="https://github.com/LucasTorres19"><FaGithub/></a>
                    <a href="https://steamcommunity.com/id/Lordgalucks/"><FaSteam/></a>
                  </div>

                  <div className="container-user">
                    <p className="p">Brandan Walser E. Carlos</p>
                    <a href="https://www.instagram.com/waffi_503/"><FaInstagram/></a>
                    <a href="https://github.com/Waffi503"><FaGithub/></a>
                    <a href="https://steamcommunity.com/id/Dedrick503/"><FaSteam/></a>
                    <a href="https://www.linkedin.com/in/carlos-brandan-dev/"><FaLinkedin/></a>
                  </div>

                  <div className="conteiner-copyright">
                  <p className="h1">Copyright © 2020-2021 MQM S.R.L</p>
                  <a href="https://github.com/LucasTorres19/Otaku-Store"><FaGithub/></a> 
                  </div>
                </div>

              </div>
              
          </div>
        </footer>
     </>
   )
}
