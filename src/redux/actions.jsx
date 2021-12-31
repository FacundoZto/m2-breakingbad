export const GET_CHARACTERS = 'GET_CHARACTERS';
export const CHARACTER_DETAIL = 'CHARACTER_DETAIL';
export const EPISODES = 'EPISODES';

// al hacer un pedido a una api se debe agregar al store el applyMiddleware
export const getCharacters = () => dispatch => {
	return fetch('https://www.breakingbadapi.com/api/characters')
	.then(response => response.json())
	.then(r => dispatch({type: GET_CHARACTERS, payload: r}))
}


export const characterDetail = (id) => dispatch => {
	return fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
	.then(response => response.json())
	.then(r => dispatch({type: CHARACTER_DETAIL, payload: r}))
}

export const episodes = () => dispatch => {
	return fetch(`https://www.breakingbadapi.com/api/episodes`)
	.then(response => response.json())
	.then(r => dispatch({type: EPISODES, payload: r}))
}
