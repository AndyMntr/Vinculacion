import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/estilo.css';
import './styles/bootstrap.css';

class UbicacionDelGrupo extends React.Component{
    render(){
        return(
            <div class="container">
          <dl class="row">
            <dt class="col-sm-3">Unidad</dt>
            <dd class="col-sm-9"><input class="form-control" disabled /></dd>
          
            <dt class="col-sm-3">Funcion</dt>
            <dd class="col-sm-9"><input class="form-control" disabled /></dd>
          </dl>
          </div>
        );
    }
}

export default UbicacionDelGrupo;