
import { createGlobalStyle } from "styled-components";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: center;
  height: 100vh;
`;

export const Body = styled.body`
background-color: #F3EBF6;
`;

export const Form = styled.form`
  width: 350px;
  height: 380px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 10px;
  padding-top: 10px;
  
  img {
    width: 150px;
    margin: 10px 0 40px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
      
    flex: 1;
    height: 96px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }
  button {
    border-radius: 5em;
    color: #fff;
    background: linear-gradient(to right, #9C27B0, #E040FB);
    border: 0;
    padding-left: 80px;
    padding-right: 80px;
    padding-bottom: 10px;
    padding-top: 10px;
    font-family: 'Ubuntu', sans-serif;
   
    font-size: 15px;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`;