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
            const currentUser = response.data.results.find((user) => user.id === decoded.user_id);
            setUser(currentUser)
            
        })
    }, [])
    useEffect(() => {
        const token = localStorage.getItem('Token');
        api
        .get(`/products/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }})
        .then((response) => {
            const decoded = jwt_decode(token)
            for (let i in response.data.results){
                if (response.data.results[i].seller.id === decoded.user_id)
                    setProducts([...response.data.results])
            }
        })
    }, [])
    
        return(
        <>  
            <Fundo src="https://cdna.artstation.com/p/assets/images/images/017/393/908/large/victor-hugo-costa-silva-casa-medieval1.jpg?1555797211"></Fundo>
            <div className="hidden" onClick={()=>{fecharModal?.()}}></div>
                <Header/>
                <Container>
                    <form className="modal">
                        <h3>Altere suas informações</h3>
                        <input type="email" placeholder="Altere aqui seu email"/>
                        <input type="text" placeholder="Altere aqui sua bio"/>
                        <input type="text" placeholder="Altere aqui sua imagem de perfil"/>
                        <input type="number" placeholder="Altere aqui seu telefone"/>
                        <button>Editar</button>
                    </form>
                    <Box>
                        <User>
                            <div>
                                {/* <img src={users.img} alt="userImg"/> */}
                                <img src="https://i.pinimg.com/564x/95/f6/70/95f67045c76fd22fa4bb2589efbfaf72--bartenders-apocalypse.jpg" alt="userImage" />
                                <h2>{users ? <h2>{users.name}</h2> : "Bob o barman"}</h2>
                            </div>
                            <div>
                                <button className="btnEdit" onClick={()=>{modal?.()}}>
                                    <img src="https://cdn-icons-png.flaticon.com/512/1860/1860115.png" alt="editUser" />
                                </button>
                            </div>
                            
                        </User>
                        <div className="headerAddress">
                            <h2>Bio</h2>
                        </div>
                        <div className="address">
                            <p>Olá sou um barman e estou precisando de pessoas para me ajudar com minha taverna, entre em contato se tiver interesse, o pagamento é alto porém as responsabilidades também</p>
                        </div>
                        <Contacts>
                            <h2>Seus Contatos</h2>
                            <div>
                                <div>
                                    <img src="https://preview.redd.it/some-supermutant-orc-token-1-2-v0-292lbuq5xm591.png?width=256&format=png&auto=webp&s=75c0b7c1a94dc46506dff77397f90e490b1f80a5" alt="usuario" />
                                </div>
                                <div className="info">
                                    <h3>
                                        Marco Aurélio
                                    </h3>
                                    <br />
                                    <span>
                                        21980344732
                                    </span>
                                    <br />
                                    <p>
                                    Olá! Me chamo Marco Aurélio, e sou um orc que presta serviços na sua região. Com minha força e habilidade, posso ajudar em diversas tarefas.
                                    Posso, por exemplo, oferecer serviços de limpeza pesada, como limpar galpões, pátios e jardins. Além disso, sou habilidoso com trabalhos manuais, como carpintaria e reparos em geral.
                                    </p>
                                    <br />
                                    <p>
                                        marcoaurelio@gmail.com
                                    </p>
                                </div>
                                <div>
                                    <button>X</button>
                                </div>
                            </div>
                            
                        </Contacts>
                    </Box>
                </Container>
        </>
    )
}

