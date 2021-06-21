import React,{useEffect, useState} from 'react';


import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import clsx from 'clsx';

import {useParams} from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';


import {useStyles} from "./styles";
import {getAlbumInfoAction} from '../../redux/AlbumInfoDucK';

const bestFormat = function(date) {
    /*Esta funcion formatea la fecha a dia - mes - año */

    let monthNames =["Ene","Feb","Mar","Abr",
                      "May","Jun","Jul","Ago",
                      "Sep", "Oct","Nov","Dic"];
    
    let day = date.getDate();
    
    let monthIndex = date.getMonth();
    let monthName = monthNames[monthIndex];
    
    let year = date.getFullYear();
    
    return `${day}-${monthName}-${year}`;  
}

export default function AlbumInfo(props) {

    //obtenemos el id del navegador
    const {id} = useParams();

    //Cargamos la info de la tienda
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAlbumInfoAction(id));
    }, [dispatch])
    let albumInfo = useSelector(store => store.albumInfo.array)[0]; 

    //cargamos estilos
    const classes = useStyles();

    //Para expandir la card
    const [expanded, setExpanded] = React.useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

   
    

  return (
    <Card className={classes.root}>
      <CardHeader
        title={albumInfo.collectionName}
        subheader={"Publicado por " +albumInfo.artistName + " el dia " +bestFormat(new Date(albumInfo.releaseDate)) }   
      />
      <CardMedia
        className={classes.media}
        image={albumInfo.artworkUrl100}
        title={props.open ? "titulo1" : "titulos2"}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            {albumInfo.copyright}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Tiene un total de {albumInfo.trackCount} canciones
          </Typography>
          <Typography paragraph>
            Su genero es de {albumInfo.primaryGenreName}
          </Typography>
          <Typography paragraph>
            {albumInfo.collectionExplicitness=== "notExplicit" ? "Es no explicito" : "Es explicito"} el album
          </Typography>
          <Typography>
            Esta cancion proviene de {albumInfo.country}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}