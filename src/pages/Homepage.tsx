import { useEffect, useState } from "react"
import api from "../services/app"
import { Header } from "../components/Header/header"
import { Fundo } from "../components/Header/style"
import { Contacts } from "./style"

export const HomePage = () => {
    const [users, setUsers] = useState<any[]>([])

    useEffect(() => {
        api
            .get(`/users`)
            .then((response) => {
                setUsers([...response.data.results])
                console.log('rodando api1')
                console.log(response.data.results)

            })
    }, [])

    return (
        <>
            <Fundo src="https://cdnb.artstation.com/p/assets/images/images/037/588/855/large/gabriel-neris-taverna-3-final.jpg?1620771767" alt="taverna"/>
            <Header/>
            <main>
                <Contacts>
                    <div>
                        <img src="https://preview.redd.it/some-supermutant-orc-token-1-2-v0-292lbuq5xm591.png?width=256&format=png&auto=webp&s=75c0b7c1a94dc46506dff77397f90e490b1f80a5" alt="usuario" />
                    </div>
                    <div className="info">
                        <h3> Marco Aurélio</h3>
                        <br />
                        <span>
                            ** *****-**32
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
                        <button>Adicionar contato</button>
                    </div>
                </Contacts>
                <Contacts>
                    <div>
                        <img src="https://i.pinimg.com/originals/ef/94/95/ef94956ffd550b1fce2ac4bd0f0c72df.png" alt="usuario" />
                    </div>
                    <div className="info">
                        <h3> Aelarion</h3>
                        <br />
                        <span>
                            ** *****-**18
                        </span>
                        <br />
                        <p>
                            Sou um elfo da floresta, com habilidades naturais e mágicas. Como um protetor da floresta, posso ajudar em tarefas como rastrear e encontrar caminhos através da mata, bem como usar meus poderes para curar plantas e animais doentes.
                        </p>
                        <br />
                        <p>
                            aelarion11@gmail.com
                        </p>
                        <button>Adicionar contato</button>
                    </div>
                </Contacts>
                <Contacts>
                    <div>
                        <img src="https://i.pinimg.com/originals/51/2c/2d/512c2dd2e51fff0441dd5f81fa72d889.png" alt="usuario" />
                    </div>
                    <div className="info">
                        <h3> Fred Estojo</h3>
                        <br />
                        <span>
                            ** *****-**07
                        </span>
                        <br />
                        <p>
                            Apesar do meu tamanho pequeno, tenho uma grande habilidade em furtividade e agilidade.
                            Posso ajudar em tarefas que requerem discrição, como coletar informações, roubar objetos valiosos, ou mesmo vigiar locais suspeitos.
                            Também sou habilidoso em culinária, e posso preparar as mais deliciosas refeições em qualquer lugar com ingredientes limitados.
                        </p>
                        <br />
                        <p>
                            fred_estojo2@gmail.com
                        </p>
                        <button>Adicionar contato</button>
                    </div>
                </Contacts>
            </main>
        </>
    )
}
