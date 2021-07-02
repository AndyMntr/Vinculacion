import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/estilo.css';
import './styles/bootstrap.css';

class Corporabilidad extends React.Component {
    render() {
        return (
            <div class="container" href="espiritualidad">
            
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre de objetivo</th>
                  <th scope="col">Calificacion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Objetivo 1</td>
                  <td>10</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Objetivo 2</td>
                  <td>10</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Objetivo 3</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
    }
}

export default Corporabilidad;