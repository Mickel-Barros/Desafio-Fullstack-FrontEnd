import { BiggerForm } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../services/app";
import { Header } from "../Header/header";
import { Container } from "./style";
import {useNavigate} from "react-router-dom";
import { Fundo } from "./style";

export function LoginPage(){
    const navigate = useNavigate()
    const formSchemaRegister = yup.object().shape({
        email: yup.string().required("Email obrigatório").email("E-mail inválido"),
        password: yup.string().required("Senha obrigatória"),

    })
    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(formSchemaRegister)
    })
    async function onSubmitFunctionRegister(obj:any){
        const data = {
            email: obj.email,
            password: obj.password,
        }
        try {
            const response =  await api.post('/login', data);
            toast.success('Login realizado com sucesso!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                }); 
                localStorage.setItem("Token", response.data.token); 
                /* navigate("/") */
        } catch (error) {
            console.error(error);
            toast.error('Ops! E-mail ou senha inválidos', {
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
            <Fundo src="https://img.freepik.com/vetores-gratis/portao-do-castelo-medieval-a-noite-no-exterior-do-palacio_107791-7340.jpg?w=2000"/>
            <Header/>
                <Container>
                    <BiggerForm onSubmit={handleSubmit(onSubmitFunctionRegister)}>
                        <h2>Faça seu login</h2>
                        <label htmlFor="email">Email</label>
                        {errors?.email?.message && typeof errors.email.message === 'string' && (
                        <p className="erro">{errors.email.message}</p>)}
                        <input id="email" type="email" placeholder="Digite aqui seu email" {...register("email")}/>

                        <label htmlFor="senha">Senha</label>
                        {errors?.email?.message && typeof errors.email.message === 'string' && (
                        <p className="erro">{errors.email.message}</p>)}
                        <input id="senha" type="password" placeholder="Digite aqui sua senha" {...register("password")}/>

                        <button className="btnRosa" type="submit">Fazer login</button>
                    </BiggerForm>
                </Container>
        </>
    )
}
