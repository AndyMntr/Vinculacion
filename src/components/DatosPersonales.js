import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/estilo.css';
import './styles/bootstrap.css';

class DatosPersonales extends React.Component{
    render(){
        return(

        <div class="container">
          <dl class="row">
            <dt class="col-sm-3">Nombres</dt>
            <dd class="col-sm-9"><input class="form-control" disabled /></dd>
          
            <dt class="col-sm-3">Apellidos</dt>
            <dd class="col-sm-9"><input class="form-control" disabled /></dd>

            <dt class="col-sm-3">Fecha de nacimiento</dt>
            <dd class="col-sm-9"><input class="form-control" disabled /></dd>

            <dt class="col-sm-3">Lugar de nacimiento</dt>
            <dd class="col-sm-9"><input class="form-control" disabled /></dd>

            <dt class="col-sm-3">Genero</dt>
            <dd class="col-sm-9"><input class="form-control" disabled /></dd>

            <dt class="col-sm-3">Cedula</dt>
            <dd class="col-sm-9"><input class="form-control" disabled /></dd>

            <dt class="col-sm-3">ID Scout</dt>
            <dd class="col-sm-9"><input class="form-control" disabled /></dd>

            <dt class="col-sm-3">E-mail</dt>
            <dd class="col-sm-9"><input class="form-control" disabled /></dd>

            <dt class="col-sm-3">Telefono de emergencia</dt>
            <dd class="col-sm-9"><input class="form-control" disabled /></dd>

            <dt class="col-sm-3">Tipo de sangre</dt>
            <dd class="col-sm-9"><input class="form-control" disabled /></dd>

            <dt class="col-sm-3">Datos medicos</dt>
            <dd class="col-sm-9"><input class="form-control" disabled /></dd>
          </dl>
        </div>
     
        );
    }
}

export default DatosPersonales;