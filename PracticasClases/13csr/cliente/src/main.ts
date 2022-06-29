import './style.css'
import axios from 'axios';
import {IResProducto, Dato} from './interfaces/IProducto';

const httpsAxios = axios.create({
  baseURL:`http://localhost:2500/v1/SextoA/api/`

})

const app = document.querySelector<HTMLDivElement>('#app')!



////codigo para hacer un formulario
const etiqueta =document.createElement("label");
etiqueta.textContent="ID"
const input =document.createElement("input")
input.id="Id"
etiqueta.htmlFor="Id"
app.appendChild(etiqueta)
app.appendChild(input)



app.innerHTML = `
<label for='nombre'>Nombre</label><input id='nombre'></input>
<label for='estado'>Estado</label><input id='estado'></input>
<label for='precio'>Precio</label><input id='precio'></input>
<label for='costo'>Costo</label><input id='costo'></input>
<label for='stock'>Stock</label><input id='stock'></input>
<label for='minimo'>Mínimo</label><input id='minimo'></input>

<button id='Nuevo'>Nuevo</button>
<button id='grabar'>Grabar</button>
<button id='consultar'>Consultar</button>
`

const Id=document.querySelector<HTMLInputElement>('#Id')!;
const Nombre = document.querySelector<HTMLInputElement>('#Nombre')!;
const Precio = document.querySelector<HTMLInputElement>('#Precio')!;
const Costo = document.querySelector<HTMLInputElement>('#Costo')!;
const Stock = document.querySelector<HTMLInputElement>('#Stock')!;
const Minimo = document.querySelector<HTMLInputElement>('#Minimo')!;
const Estado = document.querySelector<HTMLInputElement>('#Estado')!;

const Nuevo = document.querySelector<HTMLButtonElement>('#Nuevo')!;
const Grabar = document.querySelector<HTMLButtonElement>('#Grabar')!;
const Consultar = document.querySelector<HTMLButtonElement>('#Consultar')!;

const cuerpo = document.querySelector<HTMLDivElement>('#cuerpo')!;

Nuevo.addEventListener('click',()=>{
  Id.value=""
  Nombre.value=""
  Precio.value=""
  Costo.value=""
  Stock.value=""
  Minimo.value=""
  Estado.value=""
})

Consultar.addEventListener('click',async() =>{
       const respproducto:IResProducto = await (await httpsAxios.get<IResProducto>('productos')).data
      console.log(respproducto);
      const {datos} = respproducto

      const tabla = document.createElement('table');
      tabla.id=""
      tabla.border=""


      for (const dato of datos){
          const row = tabla.insertRow()
          const celda = row.insertCell()
          celda.innerHTML=`${dato.Nombre}`
          const celda2= row.insertCell()
          celda2.innerHTML= `${dato.Precio}`
        }
        cuerpo.innerHTML=""
        cuerpo.appendChild(tabla)
})