import styled from "styled-components";


export const Fundo = styled.img`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: -1;

`

export const StyledHeader = styled.header`

  background-color: #212121;
  display: flex;
  flex-direction: column;
  
  .header{
  height: 90px;
  width: 100%;
  background-color: #212121;
  display: flex;
  justify-content: center;
  }
  
  .header-logo{
    width: 25%;
    height: 100%;
  }

  .header-logo > h1{
    color: white;
    height: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    font-size: 18px;
    font-family: 'Press Start 2P', cursive;
  }

  .header-search{
    width: 55%;
    height: 100%;
    
  }

  .header-search > form{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;

  }

  .header-search > form > button{
    width: 60px;
    height: 40px;
    background-color: #50739f;
    color: white;
    border: none;
    cursor: pointer;

  
  }

  .header-search > form > input{
    width: 85%;
    height: 40px;
    outline: 0;
    padding: 0 10px;
  }
 
  .header-icons{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 20%;

  }
  
  .cart-ico{
    color: white;
    font-size: 32px;
    cursor: pointer;

  }

  .user-ico{
    color: white;
    font-size: 32px;
    cursor: pointer;

  }

  nav {
  background-color: #212121;

  margin: 0 auto;
  font-size: 16px;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;

}

nav li {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

nav a {
  display: block;
  padding: 10px;
  color: #fff;
  text-decoration: none;
  display: flex;
  cursor: pointer;
  font-family: 'Press Start 2P', cursive;
}

nav li.dropdown {
  position: relative;
  z-index: 6;
  cursor: pointer;

}

nav li.dropdown ul {
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  background-color: #333;
  transition: all ease 1s;
}

nav li.dropdown:hover ul {
  display: block;
}

nav li.dropdown ul li {
  display: block;
  cursor: pointer;
}

nav li.dropdown ul li a {
  padding: 10px;
  cursor: pointer;
}

nav li.dropdown ul li:hover {
  background-color: #444;
}
    border-bottom: 2px solid #e40712ff;
box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)
`;

