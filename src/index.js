
import { createStore } from './create-store'
import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themBtn = document.getElementById('theme')

// create Redux
// create store
const store = createStore()

addBtn.addEventListener('click', () => {

})
subBtn.addEventListener('click', () => {

})
asyncBtn.addEventListener('click', () =>{
  setTimeout(() =>{

  }, 2000)
})
themBtn.addEventListener('click', () =>{
  //document.body.classList.toggle('dark')
})




