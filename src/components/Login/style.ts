import styled from "styled-components";

export const Fundo = styled.img`
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: -1;
    
`
export const Container = styled.main`
    padding-top: 50px;
    
`
export const BiggerForm = styled.form`
    border-radius: 5px;
    min-width: 300px;
    max-width: 600px;
    background-color: white;
    width: 50%;
    height: 400px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    input{
        margin-left: 15px;
        margin-top: 5px;
        height: 40px;
        border-radius: 5px;
        margin-right: 15px;
        ::-webkit-input-placeholder {
            padding-left: 5px;
        }
    }
    select{
        
        margin-left: 15px;
        margin-top: 5px;
        height: 40px;
        border-radius: 5px;
        margin-right: 15px;
    }

    p{
        margin-left: 15px;
        margin-right: 15px;
        color: red;
    }
    label{
        margin-top: 30px;
        margin-left: 15px;
        margin-right: 15px;
    }
    h2{
        font-size: 1.5rem;
        margin: 30px auto;
    }
    span{
        margin: 0 auto;
        margin-top: 5px;
    }
    button{
        margin: 0 auto;
        margin-top: 30px;
        width: 150px;
        height: 50px;
        border-radius: 5px;
       
        background-color: rgb(80, 115, 159);
        color: white;
        border: none;
        cursor: pointer;
    }
`
