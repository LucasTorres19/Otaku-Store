import React from "react";
import {Dropdown,SplitButton} from  'react-bootstrap';

export default function Dropdown_items(props){

    function Crear(Categories){
       
            const CATEGORIES_JSON = Object.values(Categories);
            
            let items = [];
            
            for (let i = 0; i < CATEGORIES_JSON.length; i++) {
                
            items[i] = <Dropdown.Item href={"/productos/"+ props.title +"/"+ CATEGORIES_JSON[i]} key={i}eventKey={i}>{CATEGORIES_JSON[i]}</Dropdown.Item>           
            
            }

            return(items);
        }

        return(
            <React.Fragment>
                <div className="mt-2">
                
                    <SplitButton
                    menuAlign={{ lg: 'left' }}
                    title={props.title}
                    id={props.title} 
                     href={"/productos/"+props.title}                 
                    >
                    {Crear(props.items)}  
                    
                    </SplitButton>
                </div>
            </React.Fragment>
        )

}

