// importacion del framework
import React, { Fragment} from 'react';

//para las rutas
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import clsx from 'clsx';
import {useParams} from 'react-router-dom';


//componentes creados
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import ListAlbums from './components/AlbumList';
import AlbumInfo from './components/AlbumInfo';
import {useStyles} from './components/utils/styles';


function App() {

  // Objeto con los estilos para el navbar
  const classes = useStyles();

  // variable que controla el side bar
  const [open, setOpen] = React.useState(false);



  const SidebarOpen = () => {
    setOpen(true);
  };

  const SidebarClose = () => {
    setOpen(false);
  };


  return (
    <Fragment>
       
       <NavBar open = {open} SidebarOpen={SidebarOpen}/> 
       <div className={classes.drawerHeader} > 
       
       {/* Sistema de rutas */}
        <Router>
          <SideBar open={open} SidebarClose={SidebarClose}/> 
            <Switch>
              {/* Rutas para la lista */}
              <Route path="/" exact>
                
                <ListAlbums  key='1'/> 
              </Route>

              <Route path="/Lista">
                <ListAlbums  key='2'/>
              </Route>

              {/* Rutas para la vista indivdual del album */}
              <Route path="/Album/:id" exact>
                <main
                className={clsx(classes.content, {
                  [classes.contentShift]: open,})}>
                  {
                    // aqui es para actualizar el componente en pantalla, tal vez no es la mejor manera, pero fue la solucion que encontre :c
                    open ? <AlbumInfo className={classes.marginspace} open={open} key = '2'/> : <AlbumInfo className={classes.marginspace} open={open} key = '1'/>
                  }
                  
                </main>
              </Route>


            </Switch>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
