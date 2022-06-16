import './styles.css'
//import { createStore } from './createStore'
import { applyMiddleware, createStore } from 'redux'
import {rootReducer} from './redux/rootReducer'
//import { DECREMENT, INCREMENT } from './redux/types'
import { decrement, increment, asyncIncrement } from './redux/actions'
import thunk from 'redux-thunk'


const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themBtn = document.getElementById('theme')

// create MiddleWare - do manually
// logger - базовий елемент MiddleWare
function logger(state){
  return function(next){
    return function(action){
      console.log('Prev-State', state.getState());
      console.log('Action', action);
      const newState = next(action)
      console.log('New-State', state.getState());
      return newState
    }
  }
}

// create Redux
// create store
// 01 - в store ми вказуємо конкретні події на сторніці
// dispatch - провідник, диспетчер, який передає вхідну інфу - подію в store
const store = createStore(
  rootReducer, 
  45, 
  applyMiddleware(thunk, logger)  // logger - additional middleWare- added manual. In this case logger need to check all of the - state/ action, abowe
  )
// buttons - increment/decrement
addBtn.addEventListener('click', () => {
  store.dispatch(increment())
})
subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
})

// button - async
asyncBtn.addEventListener('click', () =>{
  setTimeout(() =>{
    store.dispatch(asyncIncrement())
  }, 2000)
})


//themBtn.addEventListener('click', () =>{
//  //document.body.classList.toggle('dark')
//})

// 02 -store за допом. subscribe - дає команду на виконання: передає чіткі вказівки getState- звернись до counter і створи елемент з новим - state. getState робить ревью оновленого стану.
store.subscribe(() => {
  const state = store.getState()
  counter.textContent = state
})
// default initial state = 0
store.dispatch({type: 'ININT_APPLICATION'})







