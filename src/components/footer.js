import React ,{Component} from "react";
import "./../assets/Css/footer.css"
import { FaInstagram , FaGithub , FaSteam , FaLinkedin  } from 'react-icons/fa';
export default class footer extends Component{

render(){
    
   return(
       <>
        <footer className="footer">
          <div className="div">
              <div className="divlogo">
                <img className="logo"src="https://www.eest5lanus.edu.ar/imgs/logo1.png" alt="Kennedy"/>       
                <h5 className="division">7°4</h5>
              </div>
              <div className="copy">

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
}