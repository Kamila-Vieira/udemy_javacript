import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    input {
      height: 40px;
      font-size: 18px;
      border: 1px solid #ddd;
      padding: 0 10px;
      border-radius: 4px;
      margin-top: 5px;

      &:focus {
        border-color: ${colors.primaryColor};
      }
    }
  }
`;

export const ConfirmDelete = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-height: ${({ hidden }) => (hidden ? '0' : '300px')};
  overflow: hidden;

  transition: max-height 0.5s;

  strong {
    color: #000;
    text-align: center;
    margin-bottom: 20px;
    svg {
      margin: 0 0 0 5px;
    }
  }

  div button {
    margin: 0 10px;
  }
`;

export const DeleteUserAsk = styled.button`
  margin: 0 auto;
  display: block;
  height: 40px;

  opacity: ${({ hidden }) => (hidden ? 0 : 1)};
  visibility: ${({ hidden }) => (hidden ? 'hidden' : 'visible')};

  transition: opacity 0.5s 0.3s;
`;
