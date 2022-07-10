import axios from "axios";
import { IResUser } from "../interfaces/IUser";

export const urlaxios = axios.create({
    baseURL: "http://localhost:3100/v1/sextoa/api/users",
})

export const postUser = async (url:string, data:IResUser[])=>{
    return await urlaxios.post(url, data)
}

export const getUser = async (url:string)=>{
    return await urlaxios.get(url)
}

export const putUser = async (url:string, data:IResUser[])=>{
    return await urlaxios.put(url, data)
}

export const deleteUser = async (url:string)=>{
    return await urlaxios.post(url)
}

export const erroraxios = (error:Error)=>{
    if (axios.isAxiosError(error)) {
        console.log("Error en el axios");
    }        
}
