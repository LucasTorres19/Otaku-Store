import React,{Component} from "react";
import Cards from "./card";
import "../assets/Css/list.css"

export default class list extends Component{
    
    constructor(props){
        super(props);
        
        this.state = {
        
          productos: []
        
        }
        this.createCards = this.createCards.bind(this)
    }

    componentDidMount(){
        this.createCards(this.props.type,this.props.cat)
    }

    async createCards(filter,filtercat){
  
        const APIURL='https://otakuapi.herokuapp.com/api/productos';
        
        const PROXYURL = "https://gentle-sands-04799.herokuapp.com/";
    
        const QUERY = await fetch(PROXYURL + APIURL)
        
        const DATA = await QUERY.json()
        
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
    
            return undefined
        })                  
                           
        
        this.setState({
          productos : filterArray
        })
      
      }



    render(){        
        
        const PRODUCTOS = this.state.productos.map(producto =>{
            return(
            <div className='Cards' key={Math.random(0,100)}>
                <Cards  key={producto._id} id={producto._id} titulo={producto.title} precio={producto.precio} link={producto.img} />       
            </div>
            )  
        })
        if (PRODUCTOS.length !== 0){
        return(
        <>
         
            <div className="List-Conteiner">
              
                
                {PRODUCTOS}
            </div>
        </>
        )}else {return(<h1>Not found</h1>)}
    }
    
}
