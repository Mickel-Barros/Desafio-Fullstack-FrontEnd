import api from "../services/app";
import { toast } from 'react-toastify';


export function adicionarContato(id:number){
    const token = localStorage.getItem("Token")
    try {
        api.defaults.headers = { Authorization: `Bearer ${token}`} as any
        const response = api.post(`/users/contact/${id}`);
        console.log(response);
        toast.success('Contato adicionado com sucesso!', {
            position: "top-right",
            autoClose: 5000, 
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            }); 
    } catch (error) {
        toast.error('Ops! Algo deu errado', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
}

export function removerContato(id:number){
    const token = localStorage.getItem("Token")
    try {
        api.defaults.headers = { Authorization: `Bearer ${token}`} as any
        const response = api.delete(`/users/contact/${id}`);
        console.log(response);
        toast.success('Contato removido com sucesso!', {
            position: "top-right",
            autoClose: 5000, 
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            }); 
    } catch (error) {
        toast.error('Ops! Algo deu errado', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
}