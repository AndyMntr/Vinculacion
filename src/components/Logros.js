import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/estilo.css';
import './styles/bootstrap.css';

class Logros extends React.Component{
    render(){
        return(
            <div class="container">
            <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre de actividad</th>
                <th scope="col">Fecha</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Actividad 1</td>
                <td>dd/mm/yyyy</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Actividad 1</td>
                <td>dd/mm/yyyy</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Actividad 1</td>
                <td>dd/mm/yyyy</td>
              </tr>
            </tbody>
          </table>
          </div>
        );
    }
}

export default Logros;