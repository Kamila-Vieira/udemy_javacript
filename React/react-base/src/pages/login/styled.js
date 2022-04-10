import styled from 'styled-components';

export const Title = styled.h1`
  color: ${(props) => (props.isRed ? 'red' : 'black')};

  small {
    font-size: 12px;
    margin-left: 15px;
    color: gray;
  }
`;

export const Paragraph = styled.p`
  background-color: blue;
`;
