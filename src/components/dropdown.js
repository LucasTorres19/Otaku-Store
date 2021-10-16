import React,{Component} from "react";
import {Dropdown,SplitButton} from  'react-bootstrap';

export default class dropdown extends Component{

    constructor(props){
        super(props);

        this.Crear = this.Crear.bind(this)
    }
    
    Crear(Categories){
       
            const CATEGORIES_JSON = Object.values(Categories)
            
            let items = []
            
            for (let i = 0; i < CATEGORIES_JSON.length; i++) {
                
            items[i] = <Dropdown.Item href={"/productos/"+ this.props.title +"/"+ CATEGORIES_JSON[i]} key={i}eventKey={i}>{CATEGORIES_JSON[i]}</Dropdown.Item>           
            
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
                     href={"/productos/"+this.props.title}                 
                    >
                    {this.Crear(this.props.items)}  
                    
                    </SplitButton>
                </div>
            </React.Fragment>
        )
    }



}

