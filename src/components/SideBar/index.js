import React from 'react';


import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import {Link} from "react-router-dom";

import {useDispatch, useSelector} from 'react-redux'


import {getAlbumListAction} from '../../redux/AlbumListDuck'


const drawerWidth = 240;
    const useStyles = makeStyles((theme) => ({
        drawer: {
          width: drawerWidth,
          flexShrink: 0,
        },
        drawerPaper: {
          width: drawerWidth,
          backgroundColor: '#212121',
        },
        drawerHeader: {
          display: 'flex',
          alignItems: 'center',
          padding: theme.spacing(0, 1),
          // necessary for content to be below app bar
          ...theme.mixins.toolbar,
          justifyContent: 'flex-end',
        },
      }));
export default function SideBar(props) {
    

    
    const open = props.open
    const theme = useTheme();
    const classes = useStyles();
    const dispatch = useDispatch();
    
    React.useEffect(() => {
        const obtenerInfo = () => {
            dispatch(getAlbumListAction());
        }
        obtenerInfo()
    }, [dispatch])
    const albumList = useSelector(store => store.albumList.array)


    return (<Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        
      >
        <div className={classes.drawerHeader}>
          <h2 style={{ color: "#fdfefe"}}>Albumes  </h2>
          <IconButton onClick={props.SidebarClose} style={{ color: "#fdfefe"}}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />

        <List>
        {albumList.map((item, index) => (
          <ListItem button key={item.collectionId} component={Link} to={`/Album/${item.collectionId}`} onClick={props.SidebarClose}>
            
              <ListItemText primary={item.collectionName} style={{ color: "#fdfefe"}} ></ListItemText>
            
            
          </ListItem>
        ))}
      </List>



      </Drawer>)

}