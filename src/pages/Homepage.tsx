import { useEffect, useState } from "react"
import api from "../services/app"
import { Header } from "../components/Header/header"
import { Fundo } from "../components/Header/style"
import { Contacts } from "./style"
import { HeadersDefaults } from "axios"
import { adicionarContato } from "../functions"

export const HomePage = () => {
    const [users, setUsers] = useState<any[]>([])

    useEffect(() => {
        api
            .get(`/users`)
            .then((response) => {
                setUsers([...response.data])

            })
    }, [])

    return (
        <>
            <Fundo src="https://cdnb.artstation.com/p/assets/images/images/037/588/855/large/gabriel-neris-taverna-3-final.jpg?1620771767" alt="taverna"/>
            <Header/>
            <main>
                
                    {users?.map( (contact, id) => {
                        return(
                            <Contacts key={id}>
                                <div>
                                    <img src={contact.img} alt="usuario" />
                                </div>
                                <div className="info">
                                    <h3>{contact.name}</h3>
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
                                    <button onClick={()=>{
                                        adicionarContato(contact.id)
                                        
                                    }}>Adicionar contato</button>
                                </div>
                            </Contacts>
                    )})}
                
            </main>
        </>
    )
}
