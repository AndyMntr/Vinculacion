import React from 'react';
import '../components/actividades/Accordion2.css';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

import AccordionWrapper from '../components/actividades/AccordionWrapper';
import AccordionItem from '../components/actividades/AccordionItem2';
import Afectividad from '../components/Afectividad';
import Caracter from '../components/Caracter';
import Corporabilidad from '../components/Corporabilidad';
import Creatividad from '../components/Creatividad';
import Espiritualidad from '../components/Espiritualidad';
import Sociabilidad from '../components/Sociabilidad';


function ObjetivosPagina() {

    const data = [
      {
        "title": "Afectividad",
        "description": "",
         "component":<Afectividad/>
         
      },
      {
        "title": "Caracter",
        "description": "",
        "component": <Caracter/>
      },
      {
        "title": "Corporabilidad",
        "description": "",
        "component": <Corporabilidad/>
      },
      {
        "title": "Creatividad",
        "description": "",
        "component": <Creatividad/>
      },
      {
        "title": "Espiritualidad",
        "description": "",
        "component": <Espiritualidad/> 
      },
      {
        "title": "Sociabilidad",
        "description": "",
        "component": <Sociabilidad/> 
      }
    ];
  
    return (
      <div className="App">
        <div className="content">
            <AccordionWrapper>
              {data.map((item, index) => (
                <AccordionItem key={index} index={index} title={item.title} description={item.description} component={item.component} />
              ))}
            </AccordionWrapper>
        </div>
        
      </div>
    );
  }
  
  export default ObjetivosPagina;