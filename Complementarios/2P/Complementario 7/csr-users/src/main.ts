import './style.css'
import { registrar, borrardatos, consultar, editar, limpiar } from './controllers/user';

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Usuario</h1>
  `
  const etiqueta = document.createElement("label")!;
  etiqueta.textContent=`Id: `
  const input = document.createElement("input")!;
  input.id="id"
  etiqueta.htmlFor="id"
  app.appendChild(etiqueta);
  app.appendChild(input);
  
app.innerHTML += `
<br> <br>
<label for="ci">Cédula: </label>
<input id="ci"> <br> <br>
<label for="fullName">Nombres: </label>
<input id="fullName"> <br> <br>
<label for="password">Contraseña: </label>
<input id="password"> <br> <br>
<label for="userAdmin">Tipo de Usuario: </label>
<input id="userAdmin" placeholder="1-admin, 2-user"> <br> <br>

<button id="register">Registar</button>
<button id="edit">Editar</button>
<button id="consult">Consultar</button>
<button id="delete">Eliminar</button>
<button id="clear">Limpiar</button>

<div id="cuerpo"/>
`

const registar = document.querySelector<HTMLButtonElement>('#register')!
const modificar = document.querySelector<HTMLButtonElement>('#edit')!
const ver = document.querySelector<HTMLButtonElement>('#consult')!
const borrar = document.querySelector<HTMLButtonElement>('#delete')!
const limpio = document.querySelector<HTMLButtonElement>('#clear')!


const id = document.querySelector<HTMLInputElement>('#id')!
const ci = document.querySelector<HTMLInputElement>('#ci')!
const fullName = document.querySelector<HTMLInputElement>('#fullName')!
const password = document.querySelector<HTMLInputElement>('#password')!
const userAdmin = document.querySelector<HTMLInputElement>('#userAdmin')!

const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!

registar.addEventListener("click", async () => {
    registrar(ci, fullName, password, userAdmin)
})

modificar.addEventListener("click", async () => {
    editar(id, ci, fullName)
})

ver.addEventListener("click", async () => {
    consultar(id, ci, fullName, password, userAdmin, cuerpo)  
})

borrar.addEventListener("click", async () => {
    borrardatos(id)
})

limpio.addEventListener("click", async () => {
    limpiar(id, ci, fullName, password, userAdmin)
})