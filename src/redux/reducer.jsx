import {GET_CHARACTERS,
CHARACTER_DETAIL,
EPISODES} from './actions.jsx';

const initialState = {
	personajes: [],
	detallePersonaje: {},
	episodios: []
}

const reducer = (state = initialState, action) => {

	switch(action.type) {
        
        case GET_CHARACTERS:
        	return {
        		...state,
        		personajes: action.payload
        	}

        case CHARACTER_DETAIL:
        	return {
        		...state,
        		detallePersonaje: action.payload
        	}

        case EPISODES:
        	return {
        		...state,
        		episodios: action.payload
        	}

        default:
        	return {
        		...state
        	}

    };
}


export default reducer;