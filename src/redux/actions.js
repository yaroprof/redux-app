import {  CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT } from "./types";
// actions потрібно для того, щоб type - вказівка на дію не вказувати в index.js
export function increment(){
	return{
		type: INCREMENT
	}
}

export function enableButtons(){
	return{
		type: ENABLE_BUTTONS
	}
}

export function disableButtons(){
	return{
		type: DISABLE_BUTTONS
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
		dispatch(disableButtons())
		setTimeout(() =>{
			dispatch(increment())
			dispatch(enableButtons())
		}, 1500)
	}
}

export function changeTheme(newTheme){
	return{
		type: CHANGE_THEME,
		payload: newTheme
	}
}

