import React from 'react';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";
import {useDispatch} from 'react-redux';


import {getAlbumInfoAction} from '../../../redux/AlbumInfoDucK';


//Estilos
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop : 10,
    background: '#282c34',
    marginLeft: 40,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    background:'#212121',
  },
  content: {
    flex: '0 0 auto',
    background:'#212121',
  },
  cover: {
    width: 100,
    background:'#212121',
    
  },
}));



export default function MediaCard(props) {

  /*MediaCard es una carta invdivual de breve informacion sobre el disco, esta recibe
                                    title = Titulo de la cancion
                                    imglink = Link de la imagen
                                    date = La fecha
                                    id = El id que es para las rutas
  */

  //cargo los estilos
  const classes = useStyles();
                              
  //Aqui pongo el formato de la fecha a dd/mm/yyyy
  var date= new Date(props.date);
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()


  //aprovechando el renderizado, cargamos en la tienda la informacion de cada album
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAlbumInfoAction(props.id));
  }, [dispatch])
  
  

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        {/* Contenido de la card */}
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" style={{ color: "#fdfefe"}}>
            {props.title}
          </Typography>
          <Typography variant="subtitle1" style={{ color: "#fdfefe"}}>
            Pink Floyd - {day}/{month}/{year}
          </Typography>
        </CardContent>

        {/* Boton para la ruta */}
        <div className={classes.controls}>
        <NavLink to={`/Album/${props.id}`} >
          <Button size="small" color = 'secondary'>
            Learn More
          </Button>
        </NavLink>
        </div>
      </div>

      {/* Carga la imagen */}
      <CardMedia
        className={classes.cover}
        image={props.imglink}
        title={props.title}
      />
    </Card>
  );
}