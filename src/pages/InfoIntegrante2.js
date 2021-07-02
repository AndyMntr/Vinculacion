import React from 'react';
import '../components/actividades/Accordion2.css';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

import AccordionWrapper from '../components/actividades/AccordionWrapper';
import AccordionItem from '../components/actividades/AccordionItem2';
import DatosFamiliares from '../components/DatosFamiliares';
import DatosPersonales from '../components/DatosPersonales';
import LugarResidencia from '../components/LugarResidencia';
import Idiomas from '../components/Idiomas';
import InfoEducativa from '../components/InfoEducativa';
import UbicacioDelGrupo from '../components/UbicacionDelGrupo';
import Logros from '../components/Logros';
import ObjetivosPagina from '../pages/ObjetivosPagina';


function InfoIntegrante2() {

    const data = [
      {
        "title": "Datos Personales",
        "description": "",
         "component":<DatosPersonales/>
         
      },
      {
        "title": "Lugar de Residencia",
        "description": "",
        "component": <LugarResidencia/>
      },
      {
        "title": "Datos Familiares",
        "description": "",
        "component": <DatosFamiliares/>
      },
      {
        "title": "Idiomas",
        "description": "",
        "component": <Idiomas/>
      },
      {
        "title": "Información Educativa",
        "description": "",
        "component": <InfoEducativa/> 
      },
      {
        "title": "Ubiicación del Grupo",
        "description": "",
        "component": <UbicacioDelGrupo/> 
      },
      {
        "title": "Logros",
        "description": "",
        "component": <Logros/> 
      },
      {
        "title": "Objetivos",
        "description": "",
        "component": <ObjetivosPagina/> 
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
  
  export default InfoIntegrante2;