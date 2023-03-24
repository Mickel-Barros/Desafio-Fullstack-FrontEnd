import styled from "styled-components";

export const Fundo = styled.img`
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: -1;
`
export const Container = styled.main`
    height: 100vh;

    .modal{
        width: 350px;
        height: 350px;
        background-color: red;
        position: fixed;
        top: -150%; 
        right: 0;
        bottom: 0;
        left: 0;
        transition: 1s;  
        z-index: 2;
        background-color: white;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px auto;
        input{
            margin-left: 15px;
            margin-top: 15px;
            height: 40px;
            width: 90%;
            border-radius: 5px;
            margin-right: 15px;
            ::-webkit-input-placeholder {
                padding-left: 5px;
            }
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
        h3{
            font-size: 1.5rem;
            margin: 20px auto;
        }
        span{
            margin: 0 auto;
            margin-top: 5px;
        }
        button{
            width: 150px;
            margin: 10px auto;
            margin-top: 30px;
            margin-bottom: 30px;
            height: 40px;
            border-radius: 5px;

            background-color: rgb(80, 115, 159);
            color: white;
            border: none;
            cursor: pointer;
        }
    }
    .appear{
        top: 20%;
        transition: 1s;  
    }
    
`
export const Box = styled.div`
    background-color: white;
    border-radius: 5px;
    min-width: 300px;
    max-width: 600px;
    width: 50%;
    border: 1px solid rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto;
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
    img{
        width: 50px;
        height: 50px;
    }
    p{
        margin-left: 15px;
        margin-right: 15px;
        color: black;
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
        height: 40px;
        background-color: none;
        color: black;
        border: 1px solid black;
        cursor: pointer;
        border-radius: 10px 0 0 10px;
            border-right: none;
        img{
            width: 20px;
            height: 20px;
            margin: 0;
        }
    }
    .headerAddress{
        border-top: 1px solid rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        button{
            margin: 0px;
            width: 40px;
            font-size: 25px;
            border-radius: 10px 0 0 10px;
            border-right: none;
        }
    }
`
export const User = styled.div`
    display: flex;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    align-items: center;
    justify-content: space-between;
    img{
        margin-left: 15px;
    }
    div{
        display: flex;
        align-items: center;
    }
    
    .address{
        display: flex;
        flex-direction: column;
    }
    h2{
        margin: 0px;
        margin-left: 10px;
    }
    button{
        margin: 0px;
        margin-right: 60px;
        width: 40px;
    }
    .btnEdit{
        margin: 0px;
    }
`
export const Contacts = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.5);
    margin-top: 50px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
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
    button{
        width: 30px;
        height: 30px;
        background-color: red;
        border: none;
        color: white;
        border-radius: 10px 0 0 10px;
        margin: 0;
    }
`
export const Products = styled.div`
    margin-top: 40px;
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.5);
    div{
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h2{
        margin: 0;
        margin-left: 215px;

    }
    button{
        font-size: 30px;
        width: 40px;
        margin-left: 0px;
        margin-top: 0px;
        margin-right: 0px;
    }
    .info{
        display: flex; 
        flex-direction: column;
        align-items: flex-start;
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
        width: 70px;
        height: 50px;
        margin-left: 15px;
        
    }
    .btn{
        width: 30px;
        height: 30px;
        background-color: red;
        margin: 0;
        margin-right: 0px;
        font-size: 14px;
    }
`