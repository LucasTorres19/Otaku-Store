import React ,{Component} from "react";


export default class Footer extends Component{


render(){
    const styles ={
    footer:{
        display:"flex",
        justifyContent:"center",
        bottom: "0",
        width: "100%",
        textAlign:"center",
        position: "fixed",
        color: "white",
        backgroundColor:"red",
        fontFamily:"Arial",
        
        
      },
      h1:{
        marginTop:"5px",
      },
   }

   return(
       <React.Fragment>
   <div style={styles.footer}>
       
       <h4 style={styles.h1}>7º4 - Diseñado por: Britez Leandro - Brandan Carlos - Torres Lucas</h4>
   </div>
     </React.Fragment>
   )
}
}