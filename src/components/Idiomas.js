import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/estilo.css';
import './styles/bootstrap.css';

class Idiomas extends React.Component{
    render(){
        return(
          <div class="container">
          <p class="h4">Idiomas</p>
          <dl class="row">
            <dt class="col-sm-3">Idioma principal</dt>
            <dd class="col-sm-9"><input class="form-control" disabled /></dd>
          
            <dt class="col-sm-3">Idioma secundario</dt>
            <dd class="col-sm-9"><input class="form-control" disabled /></dd>
          </dl>
        </div>
        );
    }
}

export default Idiomas;