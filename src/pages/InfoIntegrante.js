import React from 'react';
import DatosPersonales from 'Vinculacion/src/components/DatosPersonales';
import LugarResidencia from 'Vinculacion/src/components/LugarResidencia';
import DatosFamiliares from 'Vinculacion/src/components/DatosFamiliares';
import Idiomas from 'Vinculacion/src/components/Idiomas';
import InfoEducativa from 'Vinculacion/src/components/InfoEducativa';
import UbicacionDelGrupo from 'Vinculacion/src/components/UbicacionDelGrupo';
import Logros from 'Vinculacion/src/components/Logros';
import Objetivos from 'Vinculacion/src/components/Objetivos';

class InfoIntegrante extends React.Component{
    render(){
       return(
           <div >
        <p>
        <a class="btn btn-outline-primary btn-lg btn-block" data-toggle="collapse" href="#personales">
          Datos personales 
        </a>
        <DatosPersonales />
      </p>
      <div >
      <p>
        <a class="btn btn-outline-primary btn-lg btn-block" data-toggle="collapse" href="#residencia">
          Lugar de residencia
        </a>
        <LugarResidencia />
      </p>
      </div>
      <p>
      <a class="btn btn-outline-primary btn-lg btn-block" data-toggle="collapse" href="#familiares">
          Datos familiares
        </a>
        <DatosFamiliares />
      </p>
      <p>
      <a class="btn btn-outline-primary btn-lg btn-block" data-toggle="collapse" href="#idiomas">
          Idiomas
        </a>
        <Idiomas />
      </p>
      <p>
      <a class="btn btn-outline-primary btn-lg btn-block" data-toggle="collapse" href="#educativa">
          Informacion educativa
        </a>
        <InfoEducativa />
      </p>
      <p>
      <a class="btn btn-outline-primary btn-lg btn-block" data-toggle="collapse" href="#ubicacion">
          Ubicacion dentro del grupo
        </a>
        <UbicacionDelGrupo />
      </p>
      <p>
      <a class="btn btn-outline-primary btn-lg btn-block" data-toggle="collapse" href="#logros">
          Logros
        </a>
        <Logros />
      </p>
      <p>
      <a class="btn btn-outline-primary btn-lg btn-block" data-toggle="collapse" href="#objetivos">
          Objetivos
        </a>
        <Objetivos />
      </p>
</div>
);
}
}
export default InfoIntegrante;