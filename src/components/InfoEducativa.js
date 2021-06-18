import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/estilo.css';
import './styles/bootstrap.css';

class InfoEducativa extends React.Component{
    render(){
        return(
            <div class="container">
            <p class="h4">Informacion educativa</p>
          <dl class="row">
            <dt class="col-sm-3">Institucion</dt>
            <dd class="col-sm-9"><input class="form-control" disabled /></dd>
          
            <dt class="col-sm-3">Direccion</dt>
            <dd class="col-sm-9"><input class="form-control" disabled /></dd>

            <dt class="col-sm-3">Curso</dt>
            <dd class="col-sm-9"><input class="form-control" disabled /></dd>
          </dl>
          </div>
        );
    }
}

export default InfoEducativa;