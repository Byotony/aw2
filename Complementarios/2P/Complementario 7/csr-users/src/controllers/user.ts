import { User } from "../interfaces/IUser";
import { urlaxios, erroraxios } from "../services/User-service";


const registrar = async (ci:HTMLInputElement, fullName:HTMLInputElement, password:HTMLInputElement, userAdmin:HTMLInputElement) => {
    const data:User = {
        ci: ci.value,
        fullName: fullName.value,
        password: password.value,
        userAdmin: Number(userAdmin.value)
    }

    try { 
        const res:User|any = await urlaxios.post<User>("/OwnerParkings", data)
        const { user }:User|any = await res.data;
        console.log(`Registro Exitoso de: ${user.fullName}`);
        
    } catch (error:Error|any) {
        erroraxios(error)
    }
}

const editar = async (id:HTMLInputElement, ci:HTMLInputElement, fullName:HTMLInputElement) => {
    const data:User| any = {
        id: id.value,
        ci: ci.value,
        fullName: fullName.value,
    }
    try {
        
        const res:User|any = await urlaxios.put<User>(`/OwnerParkings/${id.value}`, data)
        const { user }:User|any = await res.data;
        console.log(`Actualizacion exitosa de: ${user.fullName}`);
        

    } catch (error:Error|any) {
        erroraxios(error)
    }
}

const consultar = async (id:HTMLInputElement, ci:HTMLInputElement, fullName:HTMLInputElement, password:HTMLInputElement, userAdmin:HTMLInputElement, cuerpo:HTMLDivElement) => {
    const {datos} = await (await (urlaxios.get("/"))).data;
    const tabla = document.createElement("table");
    tabla.id = "tabla";
    tabla.border = "1"
    tabla.style.marginTop = '40px'
    tabla.style.marginLeft = '35%'

    //http://localhost:3100/v1/sextoa/api/users
    
    for(const user of datos){
        const row = tabla.insertRow();
        const cell1 = row.insertCell();
        cell1.innerHTML = `<button class="boton" value=${user._id}>${user.fullName}</button>`;
        const cell2 = row.insertCell();
        cell2.innerHTML = `${user.userAdmin}`;
    }

    cuerpo.innerHTML = ``;
    cuerpo.appendChild(tabla);
    document.querySelectorAll(".boton").forEach((boton:Element)=>{
        boton.addEventListener("click", async ()=>{
            const idx = (boton as HTMLButtonElement).value;
            const {user}:User|any = await (await urlaxios.get<User>(`/${idx}`)).data;
            
            id.value=user._id
            ci.value= user.ci
            fullName.value= user.fullName
            password.value= user.password
            userAdmin.value= user.userAdmin
        }
    )}
)}

const borrardatos = async (id:HTMLInputElement) => {
    try {
        const res:User|any = await urlaxios.delete<User>(`/${id.value}`)
        const { user }:User|any = await res.data;
        console.log(`Eliminacion exitosa de: ${user.fullName}`);
        

    } catch (error:Error|any) {
        erroraxios(error)
    }
}

const limpiar = (id:HTMLInputElement, ci:HTMLInputElement, fullName:HTMLInputElement, password:HTMLInputElement, userAdmin:HTMLInputElement) => {
    id.value = "";
    ci.value = "";
    fullName.value = "";
    password.value = "";
    userAdmin.value = "";
}

export { registrar, editar, consultar, borrardatos, limpiar }
