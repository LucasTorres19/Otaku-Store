import React,{ useEffect,useState  } from 'react';
import  SpinnerLoad  from '../components/spinner.js';
import Header from '../components/header.js';
import Footer from "../components/footer.js";
import Nav from "../components/nav.js";
import {Button} from  'react-bootstrap';
import CarruselCartas from "../components/card_carrusel.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/Css/producto.css';
import Api_get from '../services/Api_Get.js';

export default function Producto (props){
    const [ producto , Setproductos] = useState([''])
    const [loading,Setloading] = useState(false)
    useEffect(() => {
        SearchProduct()// eslint-disable-next-line
    }, [])

    async function SearchProduct(){

    const data = await Api_get("https://otakuapi.herokuapp.com/api/productos/" + props.id)
    
    Setproductos({data})
    Setloading(true)
  
    
}
        return(
        <>  
            <Header input="True"/>
                <Nav/>
                {loading?<>
                <div className="conteiner">

                    <div className="conteiner-img">
                           
                        <img src={producto.data.img} alt={producto.data.title} className="Image"/>

                    </div>

                    <div className="conteiner-desc">
                        <p className="ruta">{"Inicio>"+ producto.data.type+">"+producto.data.cat+">"+producto.data.title}</p>
                        <h1>{producto.data.title}</h1>
                        <h2><b>{"$"+ producto.data.precio+".00"}</b></h2>
                        <p className="cuotas"><b>18</b> Cuotas de <b>${(producto.data.precio/18).toFixed(2)}</b> </p>
                        <p className="letraspequeñas">Ver mas detalles</p>
                        <h3>{producto.data.desc}</h3>

                        <div className="conteiner-bottons">
                        
                        <Button variant="primary">Agregar al Carrito</Button>
                        
                        </div>

                    </div>
                </div>
                

                <CarruselCartas title={"Otros " + producto.data.cat } type={producto.data.type} cat={producto.data.cat} />
                </>
                :
                     <SpinnerLoad />
                }

            <Footer />   
        </>
        )
    }


