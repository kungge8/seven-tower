import {
	GET_CATALOG
} from '../Actions';

const initialState = {
	catalog: []
}

export default function (state = initialState, action){
	switch (action.type){
		case GET_CATALOG:
			return {
				...state,
				catalog: action.catalog
			}
			
		default:
			return state
	}
}