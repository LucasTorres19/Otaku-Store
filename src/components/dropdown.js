import React,{Component} from "react";
import {Dropdown,SplitButton} from  'react-bootstrap';

export default class dropdown extends Component{

    constructor(props){
        super(props);

        this.Crear = this.Crear.bind(this)
    }
    
    Crear(aux){
       
            const array = Object.values(aux)
            
            let items = []
            
            for (let index = 0; index < array.length; index++) {
                
            items[index] = <Dropdown.Item href={"/"+ this.props.title +"/"+ array[index]} key={index}eventKey={index}>{array[index]}</Dropdown.Item>           
            
            }
            return(items)
}

    render(){
        return(
            <React.Fragment>
                <div className="mt-2">
                
                    <SplitButton
                    menuAlign={{ lg: 'left' }}
                    title={this.props.title}
                    id={this.props.title} 
                     href={"/"+this.props.title}                 
                    >
                    {this.Crear(this.props.items)}  
                    
                    </SplitButton>
                </div>
            </React.Fragment>
        )
    }



}

