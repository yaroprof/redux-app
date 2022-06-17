import { combineReducers } from "redux"
import { ASYNC_INCREMENT, CHANGE_THEME, DECREMENT, INCREMENT } from "./types"

// reducer Counter-refference
function counterReducer( state = 0, action ){
	if( action.type ===  INCREMENT){
		return state + 1
	}else if ( action.type === DECREMENT){
		return state - 1
	}
	return state
}  

const initialThemeState = {
	value: 'light'
}

// reducer Theme-refference 
function themeReducer( state = initialThemeState, action ){
	switch (action.type){
		case CHANGE_THEME:
			// не має мутабельносіт, а відбуваєтбся зміна об'єкту ч-з деструктуризацію
			return {...state, value: action.payload}
		default: return state
	}
}

export const rootReducer = combineReducers({
	counter: counterReducer,
	theme: themeReducer
})