import './styles.css'
import { createStore } from './createStore'
import {rootReducer} from './redux/rootReducer'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themBtn = document.getElementById('theme')

// create Redux
// create store
const store = createStore(rootReducer, 0)

addBtn.addEventListener('click', () => {
  store.dispatch({type: 'Increment'})
})
subBtn.addEventListener('click', () => {
  store.dispatch({type: 'Decrement'})
})
//asyncBtn.addEventListener('click', () =>{
//  setTimeout(() =>{
//  }, 2000)
//})

store.subscribe(() => {
  const state = store.getState()
  counter.textContent = state
})
// default initial state = 0
store.dispatch({type: 'ININT_APPLICATION'})











//themBtn.addEventListener('click', () =>{
//  //document.body.classList.toggle('dark')
//})




