import React from 'react';

import AccordionItem from './AccordionItem';
import './estilo.css';

class Accordion extends React.Component {
    render() {
        const hiddenTexts = [{
            label: 'Datos Personales'
  
        },
        {
            label: 'Lugar de Residencia'
        },
        {
            
            label: 'Datos Familiares'
             
        },
        {
            label: 'Idiomas'
        },
        {
            label: 'Informacion educativa'
        },
        {
            label: 'Ubicacion dentro del grupo'
        },
        {
            label: 'Logros'
        },
        {
            label: 'Objetivos'
        }];
        return (
           
            <div className="accordion">
                {this.props.hiddenTexts.map((hiddenText) => <AccordionItem key={hiddenText.label} hiddenText={hiddenText} />)}
            </div>
        
        );
    }
}



export default Accordion;