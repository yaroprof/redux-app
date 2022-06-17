import {  CHANGE_THEME, DECREMENT, INCREMENT } from "./types";
// actions потрібно для того, щоб type - вказівка на дію не вказувати в index.js
export function increment(){
	return{
		type: INCREMENT
	}
}

export function decrement(){
	return{
		type: DECREMENT
	}
}

// all async actions create in this place
export function asyncIncrement(){
	return function(dispatch){
		dispatch((increment()), 1500)
	}
}

export function changeTheme(newTheme){
	return{
		type: CHANGE_THEME,
		payload: newTheme
	}
}

