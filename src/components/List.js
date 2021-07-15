import React,{Component} from "react";
import Cards from "./cards";
import "../assets/Css/list.css"

export default class list extends Component{
    
    constructor(props){
        super(props);
        
        this.state = {
        
          productos: []
        
        }
        this.CreateCards = this.CreateCards.bind(this)
    }

    componentDidMount(){
        this.CreateCards(this.props.type,this.props.cat)
    }

    async CreateCards(filter,filtercat){
  
        const apiURL='https://otaku-store-api.herokuapp.com/api/productos';
        
        const proxyurl = "https://gentle-sands-04799.herokuapp.com/";
    
        const query = await fetch(proxyurl + apiURL)
        
        const data = await query.json()
        
        let FilterArray = []
    
        let i = 0
  
        //Filtrando los datos segun el filtro que llegue por parametro desde el home.js.
        
        data.map(objeto =>{
          if(filtercat ==="null"){
              
              if ( ( objeto.type === filter)  || (objeto.type === filter.toLowerCase()) ){
              
                FilterArray[i] = objeto
                i++
                
            }
              else if ( filter === "all" && filtercat==="null"){
                FilterArray[i] = objeto
                i++
            }}
            else{
              if(( objeto.cat === filtercat) || ( objeto.cat === filtercat.toLowerCase())){
                FilterArray[i] = objeto
                i++
    
              }
    
            }
    
            return undefined
        })                  
                           
        
        this.setState({
          productos : FilterArray
        })
      
      }



    render(){        
        
        const productos = this.state.productos.map(producto =>{
            return(
            <div className='Cards' key={Math.random(0,100)}>
                <Cards  key={producto._id} id={producto._id} titulo={producto.title} precio={producto.precio} link={producto.img} />       
            </div>
            )  
        })

        return(
        <>
            <div className="List-Conteiner">
                {productos}
            </div>
        </>
        )
    }
    
}