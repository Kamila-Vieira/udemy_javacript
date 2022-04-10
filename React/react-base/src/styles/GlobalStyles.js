import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../config/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body{
    font-size: sans-serif;
    background-color: ${primaryDarkColor};
    color: ${primaryColor};
  }

  html, body, #root{
    height: 100%;
  }

  button{
    cursor: pointer;
    background-color: ${primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }

  a{
    text-decoration: none;
    color: ${primaryColor};
  }

  ul{
    list-style: none;
  }
`;

export const Container = styled.section`
  max-width: 1220px;
  margin: 15px auto;
  padding: 15px;
  border: 1px solid;
  border-radius: 16px;
  background-color: #fff;

  @media (max-width: 1250px) {
    margin: 15px;
  }
`;
