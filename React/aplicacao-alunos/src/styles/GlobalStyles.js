import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body{
    font-size: sans-serif;
    background-color: ${colors.primaryDarkColor};
    color: ${colors.primaryDarkColor};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  html, body, #root{
    height: 100%;
  }

  button{
    cursor: pointer;
    background-color: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 300ms;
  }

  button:hover{
    filter: brightness(75%);
  }

  a{
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  ul{
    list-style: none;
  }

  body .Toastify .Toastify__toast-container {
    .Toastify__toast {
      color: #ffffff;

      .Toastify__toast-icon svg {
        fill:  #ffffff;
      }
      .Toastify__progress-bar{
        background-color:  #ffffff;
      }
      .Toastify__close-button {
        color: #ffffff;
        opacity: 1;
      }
      &--success{
        background-color: ${colors.successColor};
      }
      &--error{
        background-color: ${colors.errorColor};
      }
    }
  }

`;

export const Container = styled.section`
  max-width: 1024px;
  margin: 15px auto;
  padding: 15px;
  border: 1px solid;
  border-radius: 16px;
  background-color: #fff;

  @media (max-width: 1250px) {
    margin: 15px;
  }
`;
