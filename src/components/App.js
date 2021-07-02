
import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Index from '../pages/Index.js';

import Administrador from '../pages/Administrador';

import Login from '../pages/LoginPage';
import AdminIntegrantes from '../pages/AdminIntegrantesPage';


import Actividades from '../pages/Actividades.js';

import Tutores from '../pages/TutoresPage';
import CambioContrasenia from '../pages/CambioContraseniaPage';

import InfoIntegrante2 from '../pages/InfoIntegrante2';
import AdminPerfi2 from '../pages/AdminPerfil2.js';
import ObjetivosPagina from '../pages/ObjetivosPagina.js'

function App() {
  return (
    <BrowserRouter>
    <Switch>
        <Route exact path="/inicio" component={Index}/>

        <Route exact path="/administrador" component={Administrador}/>

        <Route exact path="/login" component={Login}/>

        <Route exact path="/adminIntegrantes" component={AdminIntegrantes}/>
       
        <Route exact path="/tutores" component={Tutores}/>
        
        <Route exact path="/cambioContrasenia" component={CambioContrasenia}/>

        <Route exact path="/actividades" component={Actividades}/>

        <Route exact path="/integrante2" component={InfoIntegrante2}/>

        <Route exact path="/adper" component={AdminPerfi2}/> 

    </Switch>
    </BrowserRouter>
  );
}

export default App;