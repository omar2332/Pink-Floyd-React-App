import React, { Fragment } from 'react';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';

  
import {useStyles} from './styles';


export default function NavBar(props) {
    /* props este componente recibe
      SidebarOpen : Esta cambia el estado de Open a Verdadero
      Open : Este controla la aparicion del icono y del sidebar
    */

    // Objeto con los estilos para el navbar
    const classes = useStyles();

    //Traemos la variable que controla al sidebar
    const open = props.open 


    return (
      <div className={classes.root}>
        <AppBar position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })} >

            
          <Toolbar>

            {/* Boton que controla la apertura del sidebar */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={props.SidebarOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>

            

            <Typography className={classes.title} variant="h6" noWrap>
                Pink Floyd APP
            </Typography>


            {/* Aqui queria haecr la busqueda manual, pero ya no me dio tiempo */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>


          </Toolbar>
        </AppBar>
      </div>
    );
  }