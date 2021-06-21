
import axios from "axios"

// constantes
const lista = {
    array: {}
}

// types


//Constante para obtener la lista
const GET_INFO_SUCCESS = 'GET_INFO_SUCCESS' 

// reducer
export default function albumInfoReducer(state = lista, action){
    //dada la action retornamos la informacion solicitada   
    switch(action.type){
        case GET_INFO_SUCCESS:
            return {...state, array: action.payload}
        default:
            return state
    }
}


// actions
export const getAlbumInfoAction = (id) => async (dispatch) => {
    //aqui obtenemos y guardamos la lista de los albunes de la API

    const url = `https://itunes.apple.com/lookup?id=${id}`
    
    if(localStorage.getItem(url)){
        
        dispatch({
            type: GET_INFO_SUCCESS,
            payload: JSON.parse(localStorage.getItem(url))
        })
    }else{
        try {
            const res = await axios.get(url)
            
            dispatch({
                type: GET_INFO_SUCCESS,
                payload: res.data.results
            })
        } catch (error) {
            console.log(error)
        }
    }
    
}