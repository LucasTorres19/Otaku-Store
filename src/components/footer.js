import React ,{Component} from "react";


export default class Footer extends Component{


render(){
    const styles ={
    footer:
      {
        display:"flex",
        bottom: "0",
        width: "100%",
        textAlign:"center",
        alignItems:"center",
        position: "relative",
        color: "white",
        backgroundColor:"#636363",
        fontFamily:"Arial",
        height:"6rem",        
        
      },
      h1:
      {
        marginTop:"5px",
      },
      logo:
      {
        width:"80px",
        height:"80px",
        marginBottom:"14px",
        marginRight:"7px",
        marginLeft:"5px"
      },
      div:
      {
        width:"100%",
        alignItems:"center",
        display:"flex",
        justifyContent:"space-between",
        marginRight:"20px", 
        marginLeft:"20px",
      },
      divlogo:
      {
        display:"flex",
        alignItems:"center",
        marginLeft:"-10px",
      },
      copy:
      {
        display:"flex",
        alignItems:"center",
        marginTop:"10px",
      },
      nombres:
      {
        display:"flex",
        flexDirection:"column",
        fontSize:"10px",
        
      },
      p:
      {
        margin: "1.5px"
      },
      division:{
        marginTop:"46px",
        marginRight:"15px",
        position:"absolute",
      }
   }

   return(
       <React.Fragment>
        <footer style={styles.footer}>
          <div style={styles.div}>
              <div style={styles.divlogo}>
                <img style={styles.logo}src="https://www.eest5lanus.edu.ar/imgs/logo1.png"/>       
                <h5 style={styles.division}>7°4</h5>
              </div>
              <div style={styles.copy}>
                <div style={styles.nombres} >
                  <p style={styles.p}>Torres E.Lucas</p>
                  <p style={styles.p}>Brandan Walser E.Carlos</p>
                  <p style={styles.p}>Britez Alvarenga E.Leandro</p>
                  <p style={styles.h1}>Copyright © 2020-2021 MQM S.R.L</p>
                </div>
               
              </div>
              
          </div>
        </footer>
     </React.Fragment>
   )
}
}