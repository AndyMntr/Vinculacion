import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/estilo.css';
import './styles/bootstrap.css';
import './actividades/Accordion';

class Objetivos extends React.Component{
    render(){
        return(
            <div class="container">
           <p>
            <a class="btn btn-outline-primary btn-lg btn-block" data-toggle="collapse" href="#corporabilidad">
              Corporabilidad
            </a>
          </p>
          <div class="collapse" id="corporabilidad">
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

          <p>
            <a class="btn btn-outline-primary btn-lg btn-block" data-toggle="collapse" href="#creatividad">
              Creatividad
            </a>
          </p>
          <div class="collapse" id="creatividad">
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

          <p>
            <a class="btn btn-outline-primary btn-lg btn-block" data-toggle="collapse" href="#caracter">
              Caracter
            </a>
          </p>
          <div class="collapse" id="caracter">
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

          <p>
            <a class="btn btn-outline-primary btn-lg btn-block" data-toggle="collapse" href="#afectividad">
              Afectividad
            </a>
          </p>
          <div class="collapse" id="afectividad">
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

          <p>
            <a class="btn btn-outline-primary btn-lg btn-block" data-toggle="collapse" href="#sociabilidad">
              Sociabilidad
            </a>
          </p>
          <div class="collapse" id="sociabilidad">
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

          <p>
            <a class="btn btn-outline-primary btn-lg btn-block" data-toggle="collapse" href="#espiritualidad">
              Espiritualidad
            </a>
          </p>
          <div class="collapse" id="espiritualidad">
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
          </div>
        );
    }
}

export default Objetivos;