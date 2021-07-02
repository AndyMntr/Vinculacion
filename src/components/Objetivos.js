import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Afectividad from '../components/Afectividad';
import Caracter from '../components/Caracter';
import Corporabilidad from '../components/Corporabilidad';
import Creatividad from '../components/Creatividad';
import Espiritualidad from '../components/Espiritualidad';
import Sociabilidad from '../components/Sociabilidad';

function Objetivos(){
    return (
      <BrowserRouter>
    <Switch>
    <Route exact path="/Afectividad" component={Afectividad}/>
    <Route exact path="/Corporabilidad" component={Corporabilidad}/>
    <Route exact path="/Creatividad" component={Creatividad}/>
    <Route exact path="/Caracter" component={Caracter}/>
    <Route exact path="/Afectividad" component={Afectividad}/>
    <Route exact path="/Sociabilidad" component={Sociabilidad}/>
    <Route exact path="/Espiritualidad" component={Espiritualidad}/>
    
    </Switch> </BrowserRouter>
           
        );
    }


export default Objetivos;