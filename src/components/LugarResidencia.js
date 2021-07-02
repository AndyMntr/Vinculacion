import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/estilo.css';
import './styles/bootstrap.css';

class LugarResidencia extends React.Component{
    render(){
        return(
            <div class="container">
            <dl class="row">
              <dt class="col-sm-3">Pais</dt>
              <dd class="col-sm-9"><input class="form-control" disabled /></dd>
            
              <dt class="col-sm-3">Provincia</dt>
              <dd class="col-sm-9"><input class="form-control" disabled /></dd>
      
              <dt class="col-sm-3">Ciudad</dt>
              <dd class="col-sm-9"><input class="form-control" disabled /></dd>
      
              <dt class="col-sm-3">Direccion</dt>
              <dd class="col-sm-9"><input class="form-control" disabled /></dd>
            </dl>
          </div>
        );
    }
}

export default LugarResidencia;
