import React, {Fragment, useEffect} from 'react';


import {useDispatch, useSelector} from 'react-redux'
import {Grid} from '@material-ui/core'

import {getAlbumListAction} from '../../redux/AlbumListDuck'
import MediaCard from './MediaCard'

export default function ListAlbums() {

    /*  
        Este componente renderiza una tabla con cards de los albumes
    */

    //CArgamos desde la store la lista de albumes para despues utilizarlos
    const dispatch = useDispatch();
    useEffect(() => {
        const obtenerInfo = () => {
            dispatch(getAlbumListAction());
        }
        obtenerInfo()
    }, [dispatch])
    const albumList = useSelector(store => store.albumList.array)
    


    return (<Grid container>
        {albumList.map((item,index)=>{
            // Cargamos la lista con las cards de cada album
            if(index !== 0){
                return <Grid item xs={6} key = {item.collectionId} >
                            <MediaCard key = {item.collectionId} 
                                    title = {item.collectionName}
                                    imglink = {item.artworkUrl100}
                                    date = {item.releaseDate}
                                    id = {item.collectionId}
                                    />
                            
                        </Grid>}
                            return <Fragment key = {item.collectionId}></Fragment>
                        
                        })
            }
    </Grid>)

}