import React,{useState,useEffect} from "react";
import Cards from "./card";
import "../assets/Css/list.css"
import Api_get from  "./../services/Api_Get.js"
import Spinner from "./spinner";

export default function List(props) {
    const [producto,setProducto] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
      createCards(props.type,props.cat,props.title)
    },)
    

    async  function createCards(filter,filtercat,title){
  
        const DATA = await Api_get("https://otakuapi.herokuapp.com/api/productos");
        
        let filterArray = []
    
        let i = 0
  
        //Filtrando los datos segun el filtro que llegue por parametro desde el home.js.
        
        DATA.map(productos =>{
          if(filtercat ==="null"){
              
              if ( ( productos.type === filter)  || (productos.type === filter.toLowerCase()) ){
              
                filterArray[i] = productos
                i++
                
            }
              else if ( filter === "all" && filtercat==="null"){
                filterArray[i] = productos
                i++
            }}
            else{
              if(( productos.cat === filtercat) || ( productos.cat === filtercat.toLowerCase())){
                filterArray[i] = productos
                i++
    
              }
    
            }
            if(filtercat==="null" && filter==="null"){

              if(productos.title.toLowerCase().includes(title.toLowerCase())){
                filterArray[i] = productos
                i++
              }


            }
    
            return undefined
        })                  
        setLoading(false)               
        setProducto(filterArray)
       
      }

 
        const PRODUCTOS = producto.map(producto =>{
            return(
            <div className='Cards' key={Math.random(0,100)}>
                <Cards  
                key={producto._id} 
                id={producto._id} 
                titulo={producto.title} 
                precio={producto.precio} 
                link={producto.img} 
                />       
            </div>
            )  
        })
        return(
        loading?
          <Spinner/>
        :
        PRODUCTOS.length !== 0?
          <div className="List-Conteiner">
              {PRODUCTOS}
          </div>  
            
        :
          <div className="notfound-container">
            <h1 className="notfound-container__h1">0 productos encontrados D:</h1>
           </div>
        )
    }
    

