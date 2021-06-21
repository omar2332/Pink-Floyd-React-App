//Librerias para crear la tienda
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

// Ducks para controls de las apis
import albumListReducer from './AlbumListDuck'
import albumInfoReducer from './AlbumInfoDucK'

//Estructura de la tienda
const rootReducer = combineReducers({
    albumList: albumListReducer,
    albumInfo: albumInfoReducer,
})


// Generamos la tienda
const composeEnhancers =  compose;

export default function generateStore() {
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
    return store
}


