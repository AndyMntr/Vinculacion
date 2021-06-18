import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/estilo.css';
import './styles/bootstrap.css';

class DatosFamiliares extends React.Component{
    render(){
        return(

            <div class="container">
            <p class="h4">Datos familiares</p>
            <p class="h5">Datos de la madre</p>
            <dl class="row">
              <dt class="col-sm-3">Nombres</dt>
              <dd class="col-sm-9"><input class="form-control" disabled /></dd>
            
              <dt class="col-sm-3">Cedula</dt>
              <dd class="col-sm-9"><input class="form-control" disabled /></dd>
      
              <dt class="col-sm-3">Fecha de nacimiento</dt>
              <dd class="col-sm-9"><input class="form-control" disabled /></dd>
      
              <dt class="col-sm-3">Lugar de trabajo</dt>
              <dd class="col-sm-9"><input class="form-control" disabled /></dd>
      
              <dt class="col-sm-3">Estudios/Profesion</dt>
              <dd class="col-sm-9"><input class="form-control" disabled /></dd>
      
              <dt class="col-sm-3">Telefono domicilio</dt>
              <dd class="col-sm-9"><input class="form-control" disabled /></dd>
      
              <dt class="col-sm-3">Telefono trabajo</dt>
              <dd class="col-sm-9"><input class="form-control" disabled /></dd>
      
              <dt class="col-sm-3">Celular</dt>
              <dd class="col-sm-9"><input class="form-control" disabled /></dd>
      
              <dt class="col-sm-3">E-mail</dt>
              <dd class="col-sm-9"><input class="form-control" disabled /></dd>
            </dl>
      
            <p class="h5">Datos del padre</p>
            <dl class="row">
              <dt class="col-sm-3">Nombres</dt>
              <dd class="col-sm-9"><input class="form-control" disabled /></dd>
            
              <dt class="col-sm-3">Cedula</dt>
              <dd class="col-sm-9"><input class="form-control" disabled /></dd>
      
              <dt class="col-sm-3">Fecha de nacimiento</dt>
              <dd class="col-sm-9"><input class="form-control" disabled /></dd>
      
              <dt class="col-sm-3">Lugar de trabajo</dt>
              <dd class="col-sm-9"><input class="form-control" disabled /></dd>
      
              <dt class="col-sm-3">Estudios/Profesion</dt>
              <dd class="col-sm-9"><input class="form-control" disabled /></dd>
      
              <dt class="col-sm-3">Telefono domicilio</dt>
              <dd class="col-sm-9"><input class="form-control" disabled /></dd>
      
              <dt class="col-sm-3">Telefono trabajo</dt>
              <dd class="col-sm-9"><input class="form-control" disabled /></dd>
      
              <dt class="col-sm-3">Celular</dt>
              <dd class="col-sm-9"><input class="form-control" disabled /></dd>
      
              <dt class="col-sm-3">E-mail</dt>
              <dd class="col-sm-9"><input class="form-control" disabled /></dd>
            </dl>
          </div>
     
        );
    }
}

export default DatosFamiliares;