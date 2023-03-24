import styled from "styled-components";

export const Contacts = styled.div`
    background-color: white;
    border-top: 1px solid rgba(0, 0, 0, 0.5);
    margin-top: 50px;
    display: flex;
    width: 380px;
    margin: 10px auto;
    border-radius: 5px;
    flex-direction: row;
    h2{
        margin: 0 auto;
        margin-top: 15px;
    }
    div{
        margin-top: 20px;
        display: flex; 
    }
    .info{
        display: flex; 
        flex-direction: column;
    }
    span{
        margin-left: 15px;
        color: green;
        font-size: 24px;
    }
    h3{
        margin-left: 15px;
    }
    img{
        width: 50px;
        height: 50px;
        margin-left: 15px;
    }
    p{
        margin-right: 45px;
    }
    button{
        width: 90px;
        height: 40px;
        background-color: rgb(80, 115, 159);
        border: none;
        color: white;
        border-radius: 5px;
        margin-left: auto;
        margin-right: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        cursor: pointer;
    }
`