import axios from "axios"

// constantes
const lista = {
    array: []
}

// types

//Constante para obtener la lista
const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS' 

// reducer
export default function albumListReducer(state = lista, action){
    //dada la action retornamos la informacion solicitada   
    switch(action.type){
        case GET_LIST_SUCCESS:
            return {...state, array: action.payload}
        default:
            return state
    }
}


// actions
export const getAlbumListAction = () => async (dispatch) => {
    //aqui obtenemos y guardamos la lista de los albunes de la API

    const url = 'https://itunes.apple.com/lookup?id=487143&entity=album'

    if(localStorage.getItem(url)){
        dispatch({
            type: GET_LIST_SUCCESS,
            payload: JSON.parse(localStorage.getItem(url))
        })
    }else{
        try {
            const res = await axios.get(url)
            dispatch({
                type: GET_LIST_SUCCESS,
                payload: res.data.results
            })
        } catch (error) {
            console.log(error)
        }
    }
    
}