import { Box, Fundo } from "./style";
import { Header } from "../Header/header";
import { Container } from "./style";
import { Contacts } from "./style";
import { User } from "./style";
import api from "../../services/app";
import { useState } from "react"; 
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import {useNavigate} from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { removerContato } from "../../functions";

function modal(){
    const form = document.querySelector(".modal")
    const root = document.querySelector(".hidden")
    form.classList.toggle("appear")
    root.classList.toggle("dark")
}
function fecharModal(){
    const form = document.querySelector(".appear")
    const root = document.querySelector(".dark")
    root.classList.toggle("dark")
    form.classList.toggle("appear")
}
export function UserPage(){
    const navigate = useNavigate()
    const [orders, setOrders] = useState([])
    const [products, setProducts] = useState([])
    const [users, setUser] = useState()
    const token = localStorage.getItem('Token');
    useEffect(() => {
        const token = localStorage.getItem('Token');
        /* if(!token){
            navigate("/login")
        } */
        api
        .get(`/users`, {
            headers: {
                Authorization: `Bearer ${token}`
            }})
        .then((response) => {
            const decoded = jwt_decode(token)
            const currentUser = response.data.find((user) => user.id === +decoded.sub);
            setUser(currentUser)
        })
    }, [])
    


    const formSchemaRegister = yup.object().shape({
        name: yup.string().notRequired(),
        img: yup.string().notRequired(),
        bio: yup.string().notRequired(),
        email: yup.string().notRequired(),
        phone: yup.string().notRequired()
    })
    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(formSchemaRegister)
    })
    async function onSubmitFunctionRegister(obj){
        const token = localStorage.getItem('Token')
        const decoded = jwt_decode(token)
        if(obj.name === ''){
            delete obj.name
        }
        if(obj.img === ''){
            delete obj.img
        }
        if(obj.bio === ''){
            delete obj.bio
        }
        if(obj.email === ''){
            delete obj.email
        }
        if(obj.phone === ''){
            delete obj.phone
        }
        if(obj.phone){
            obj.phone = parseInt(obj.phone)
        }
        try {
            const config = {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              };
              
            const response = await api.patch(`/users/${+decoded.sub}`, obj, config);
            toast.success('Edição realizada com sucesso!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        } catch (error) {
            console.error(error);
            toast.error('Ops! Algo deu errado', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        }
    
        return(
        <>  
            <Fundo src="https://cdna.artstation.com/p/assets/images/images/017/393/908/large/victor-hugo-costa-silva-casa-medieval1.jpg?1555797211"></Fundo>
            <div className="hidden" onClick={()=>{fecharModal?.()}}></div>
                <Header/>
                <Container>
                    <form className="modal" onSubmit={handleSubmit(onSubmitFunctionRegister)}>
                        <h3>Altere suas informações</h3>
                        <input type="email" placeholder="Altere aqui seu email" {...register("email")}/>
                        <input type="text" placeholder="Altere aqui sua bio" {...register("bio")}/>
                        <input type="text" placeholder="Altere aqui sua imagem de perfil" {...register("img")}/>
                        <input type="number" placeholder="Altere aqui seu telefone" {...register("phone")}/>
                        <button type="submit">Editar</button>
                    </form>
                    <Box>
                        <User>
                            <div>
                                <img src={users ? users.img: ""} alt="userImage" />
                                <h2>{users ? <h2>{users.name}</h2> : "Bob o barman"}</h2>
                            </div>
                            <div>
                                <button className="btnEdit" onClick={()=>{modal?.()}}>
                                    <img src= "https://cdn-icons-png.flaticon.com/512/1860/1860115.png" alt="editUser" />
                                </button>
                            </div>
                            
                        </User>
                        <div className="headerAddress">
                            <h2>Bio</h2>
                        </div>
                        <div className="address">
                            <p>{users? users.bio: ""}</p>
                        </div>
                        <Contacts>
                            <h2>Seus Contatos</h2>
                            <div>
                                {users?.contacts.map( (contact) => {
                                    return(
                                    <div className="contatos">
                                        <div>
                                            <img src={contact.src} alt="usuario" />
                                        </div>
                                        <div className="info">
                                            <h3>
                                            {contact.name}
                                            </h3>
                                            <br />
                                            <span>
                                            {contact.phone}
                                            </span>
                                            <br />
                                            <p>
                                            {contact.bio}
                                            </p>
                                            <br />
                                            <p>
                                            {contact.email}
                                            </p>
                                        </div>
                                        <div div className="contatos">
                                            <button onClick={()=>{removerContato(contact.id)}}>X</button>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                            
                        </Contacts>
                    </Box>
                </Container>
        </>
    )
}

