import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  input {
    height: 40px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-bottom: 20px;

    &[type='number'] {
      -moz-appearance: textfield;
      appearance: textfield;

      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
    }
  }
`;

export const ProfilePictureEdit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 0 20px;
  margin-bottom: 20px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    color: #fff;
    background-color: ${colors.primaryColor};
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
