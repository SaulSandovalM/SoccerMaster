import React from 'react';
import {Route, Switch} from 'react-router-dom';
//rutas sistemas
import Politicas from "./components/footer/Politicas";
import LoginContainer from "./components/login/LoginContainer";
import LoginContainerE from "./components/loginEntrenador/LoginContainerE";
import SignUpContainer from "./components/signup/SignUpContainer";
import SignUpContainer2 from "./components/signup/SignUpContainer2";
import TorneoHome from "./components/torneos/TorneoHome";
import TorneoHomeE from './components/torneosEntrenador/TorneoHomeE';
import TableContainer1 from "./components/torneo/TableContainer1";
import TableContainer2 from "./components/torneodos/TableContainer2";
import TableContainer3 from "./components/torneotres/TableContainer3";
import TableContainer4 from "./components/torneocuatro/TableContainer4";
import TableContainer5 from "./components/torneocinco/TableContainer5";
import TableContainer6 from "./components/torneoseis/TableContainer6";
import TableContainer7 from "./components/torneosiete/TableContainer7";
import TableContainer8 from "./components/torneoocho/TableContainer8";
import TableContainer9 from "./components/torneonueve/TableContainer9";
import PrivateRoute from "./PrivateRoute";
import DocumentHome from "./components/document/MyApp";
import GoleadorContainer from './components/goleador/GoleadorContainer';
//equipos rutas
import Equipos from './components/torneosAdmin/TorneosAdmin';
import EquipoTorneoOro from "./components/torneotres/equipos/EquipoContainer";
import EquipoTorneoRey from "./components/torneo/equipos/EquipoContainer";
import EquipoTorneoLibertadores from "./components/torneocuatro/equipos/EquipoContainer";
import EquipoTorneoConfederaciones from "./components/torneosiete/equipos/EquipoContainer";
import EquipoTorneoAmerica from "./components/torneodos/equipos/EquipoContainer";
import EquipoTorneoFemenil from "./components/torneonueve/equipos/EquipoContainer";
import EquipoTorneoAfricana from "./components/torneocinco/equipos/EquipoContainer";
import EquipoTorneoSudamericana from "./components/torneoocho/equipos/EquipoContainer";
import EquipoTorneoArgentina from "./components/torneoseis/equipos/EquipoContainer";
//rutas equipos equipos admin
import EquipoTorneoOroAdmin from "./components/torneotresadmin/equipos/EquipoContainer";
import EquipoTorneoReyAdmin from "./components/torneounoadmin/equipos/EquipoContainer";
import EquipoTorneoLibertadoresAdmin from "./components/torneocuatroadmin/equipos/EquipoContainer";
import EquipoTorneoConfederacionesAdmin from "./components/torneosieteadmin/equipos/EquipoContainer";
import EquipoTorneoAmericaAdmin from "./components/torneodosadmin/equipos/EquipoContainer";
import EquipoTorneoFemenilAdmin from "./components/torneonueveadmin/equipos/EquipoContainer";
import EquipoTorneoAfricanaAdmin from "./components/torneocincoadmin/equipos/EquipoContainer";
import EquipoTorneoSudamericanaAdmin from "./components/torneoochoadmin/equipos/EquipoContainer";
import EquipoTorneoArgentinaAdmin from "./components/torneoseisadmin/equipos/EquipoContainer";
//perro
import Equipo from './components/torneodos/equipos/EquipoContainer';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LoginContainer} />
    <Route path="/login" component={LoginContainer} />
    <Route path="/loginEntrenador" component={LoginContainerE}/>
    <Route path="/signup" component={SignUpContainer} />
    <Route path="/signup2" component={SignUpContainer2} />
    <Route path="/torneos" component={TorneoHome} />
    <Route path="/torneosAdmin" component={Equipos} />
    <Route path="/torneos-entrenador" component={TorneoHomeE}/>
    <Route path="/politicas" component={Politicas} />
    <Route path="/goleadores" component={GoleadorContainer} />
    <Route path="/pdf" component={DocumentHome} />
    {/* Aquí empieza Torneos rutas */}
    <Route path="/torneo-rey" component={TableContainer1} />
    <Route path="/torneo-america" component={TableContainer2} />
    <Route path="/torneo-oro" component={TableContainer3} />
    <Route path="/torneo-liber" component={TableContainer4} />
    <Route path="/torneo-afri" component={TableContainer5} />
    <Route path="/torneo-arge" component={TableContainer6} />
    <Route path="/torneo-confe" component={TableContainer7} />
    <Route path="/torneo-sud" component={TableContainer8} />
    <Route path="/torneo-fem" component={TableContainer9} />
    {/* Prueba y borrar */}
    <Route exact path="/equiposamerica" component={Equipo} />
    {/* Aquí empieza Equipos con los jugadores dentro rutas */}
    <Route path="/equipos-oro" component={EquipoTorneoOro} />
    <Route path="/equipos-rey" component={EquipoTorneoRey} />
    <Route path="/equipos-confederaciones" component={EquipoTorneoConfederaciones} />
    <Route path="/equipos-libertadores" component={EquipoTorneoLibertadores} />
    <Route path="/equipos-africana" component={EquipoTorneoAfricana} />
    <Route path="/equipos-argentina" component={EquipoTorneoArgentina} />
    <Route path="/equipos-sudamericana" component={EquipoTorneoSudamericana} />
    <Route path="/equipos-femenil" component={EquipoTorneoFemenil} />
    <Route path="/equipos-america" component={EquipoTorneoAmerica} />
    {/* Rutas de equipos admin */}
    <Route path="/equipos-oro-admin" component={EquipoTorneoOroAdmin} />
    <Route path="/equipos-rey-admin" component={EquipoTorneoReyAdmin} />
    <Route path="/equipos-confederaciones-admin" component={EquipoTorneoConfederacionesAdmin} />
    <Route path="/equipos-libertadores-admin" component={EquipoTorneoLibertadoresAdmin} />
    <Route path="/equipos-africana-admin" component={EquipoTorneoAfricanaAdmin} />
    <Route path="/equipos-argentina-admin" component={EquipoTorneoArgentinaAdmin} />
    <Route path="/equipos-sudamericana-admin" component={EquipoTorneoSudamericanaAdmin} />
    <Route path="/equipos-femenil-admin" component={EquipoTorneoFemenilAdmin} />
    <Route path="/equipos-america-admin" component={EquipoTorneoAmericaAdmin} />
    <PrivateRoute render={() => <h1> Se está construyendo </h1>} />
  </Switch>
);

export default Routes
