import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Accordion from '../components/actividades/Accordion';

class AdminPerfil extends React.Component{
    render(){
        const hiddenTexts = [{
          label: 'Datos Familiares'
      },
      {
          label: 'Lugar de residencia'
      },
      {
          label: 'Datos familiares'
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
                  <Accordion hiddenTexts={hiddenTexts} />
      );
  }
}
export default AdminPerfil;