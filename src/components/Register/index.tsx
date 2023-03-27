import { BiggerForm, Fundo } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../services/app";
import { Header } from "../Header/header";
import { Container } from "./style";

export function RegisterPage(){
    const formSchemaRegister = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        img: yup.string().required("Imagem obrigatória"),
        bio: yup.string().required("Bio obrigatória"),
        email: yup.string().required("Email obrigatório").email("E-mail inválido"),
        cpf: yup.number().required("Telefone obrigatório"),
        password: yup.string().required("Senha obrigatória").min(6,"A senha precisa ter no mínimo 6  dígitos"),
        passwordConfirmation: yup.string().required("Senha obrigatória").oneOf([yup.ref('password')], "As senhas devem ser iguais"),
    })
    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(formSchemaRegister)
    })
    async function onSubmitFunctionRegister(obj:any){
        let seller = "TRUE"
        let data = {
            name: obj.name,
            email: obj.email,
            password: obj.password,
            phone: obj.cpf,
            img: obj.img,
            contacts: [],
            bio: obj.bio
        }
        
        try {
            const response =  await api.post('/users', data);
            toast.success('Cadastro realizado com sucesso!', {
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
            <Fundo src="https://thumbs.dreamstime.com/b/textura-velha-do-papel-de-pergaminho-do-vintage-do-marrom-amarelo-24082203.jpg"></Fundo>
            <Header/>
            <Container>
                <BiggerForm onSubmit={handleSubmit(onSubmitFunctionRegister)}>
                    <h2>Crie sua conta</h2>
                    <span>Rapido e grátis, vamos nessa</span>

                    <label htmlFor="nome">Nome</label>
                    {errors?.name?.message && typeof errors.name.message === 'string' && (
                    <p className="erro">{errors.name.message}</p>)}
                    <input id="nome" type="text" placeholder="Digite aqui seu nome" {...register("name")}/>

                    <label htmlFor="email">Email</label>
                    {errors?.email?.message && typeof errors.email.message === 'string' && (
                    <p className="erro">{errors.email.message}</p>)}
                    <input id="email" type="email" placeholder="Digite aqui seu email" {...register("email")}/>

                    <label htmlFor="senha">Senha</label>
                    {errors?.password?.message && typeof errors.password.message === 'string' && (
                    <p className="erro">{errors.password.message}</p>)}
                    <input id="senha" type="password" placeholder="Digite aqui sua senha" {...register("password")}/>

                    <label htmlFor="confirmarSenha">Confirmar Senha</label>
                    {errors?.passwordConfirmation?.message && typeof errors.passwordConfirmation.message === 'string' && (
                    <p className="erro">{errors.passwordConfirmation.message}</p>)}
                    <input id="confirmarSenha" type="password" placeholder="Digite novamente sua senha" {...register("passwordConfirmation")}/>

                    <label htmlFor="cpf">Telefone</label>
                    <input id="cpf" type="number" placeholder="Digite seu número de telefone" {...register("cpf")}/>
                    
                    <label htmlFor="img">Imagem de perfil</label>
                    {errors?.img?.message && typeof errors.img.message === 'string' && (
                    <p className="erro">{errors.img.message}</p>)}
                    <input id="img" type="text" placeholder="Digite o link da imagem" {...register("img")}/>

                    <label htmlFor="bio">Nos conte um pouco sobre você</label>
                    {errors?.bio?.message && typeof errors.bio.message === 'string' && (
                    <p className="erro">{errors.bio.message}</p>)}
                    <input id="bio" type="text" placeholder="Digite aqui sobre você" {...register("bio")}/>

                    <button className="btnRosa" type="submit">Cadastrar</button>
                </BiggerForm>
            </Container>
        </>
    )
}
