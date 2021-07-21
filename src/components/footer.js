import React ,{Component} from "react";
import "./../assets/Css/footer.css"

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
                <div className="nombres" >
                  <p className="p">Torres E.Lucas</p>
                  <p className="p">Brandan Walser E.Carlos</p>
                  <p className="h1">Copyright © 2020-2021 MQM S.R.L</p>
                </div>
              </div>
              
          </div>
        </footer>
     </>
   )
}
}