import './style.css'
import.meta.env.VITE_VAR;

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`

let a = import.meta.env.VITE_VAR;
console.log(a)