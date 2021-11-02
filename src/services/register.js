export default async function sendRegister(datos){
   
    try{
        const PROXYURL = "https://gentle-sands-04799.herokuapp.com/";
    
       await fetch(PROXYURL + "https://otakuapi.herokuapp.com/api/usuarios",{
          method:'POST',
          headers:{
            'content-type':'application/json',
          },body: JSON.stringify(datos)
        
        })
        .then(res => res.json())
        
        .then(res =>{
         
            if (res.auth){
    
            return(true)
          }
       
        })
    }
    catch{

        return(false)
    }
      } 



