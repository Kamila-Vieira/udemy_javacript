import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10rem 0;
`;
export const Strong = styled.strong`
  font-size: 4rem;
  display: flex;
  align-items: center;
  &::after {
    content: '';
    height: 50px;
    background-color: ${({ theme }) => theme.colors.gray};
    width: 2px;
    margin: 0 20px;
    display: inline-block;
  }
`;

export const Text = styled.p`
  font-size: 2rem;
`;
