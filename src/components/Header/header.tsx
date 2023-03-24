import { StyledHeader } from "./style"
import { useNavigate } from "react-router-dom"
import { useState } from "react"


export const Header = () => {
    const navigate = useNavigate()

    return (
        <>
            <StyledHeader>
            <div className="header">
                <div className="header-logo">
                    <h1>Recruit Station</h1>
                </div>
            </div>

            <nav>
                <ul>
                    <li><a onClick={()=>{navigate("/")}}>Home</a></li>
                    <li className="dropdown">
                        <ul>
                            <li><a href="#">Todos os produtos</a></li>
                            <li><a href="#">Periféricos</a></li>
                            <li><a href="#">Consoles</a></li>
                            <li><a href="#">Notebooks</a></li>
                        </ul>
                    </li>
                    <li><a onClick={()=>{navigate("/login")}} href="/login">Login</a></li>
                    <li><a onClick={()=>{navigate("/register")}} href="/register">Cadastro</a></li>
                    <li><a onClick={()=>{navigate("/user")}} href="/user">Perfil</a></li>
                </ul>
            </nav>
            </StyledHeader>
        </>


    )
}