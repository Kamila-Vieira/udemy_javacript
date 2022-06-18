import styled from 'styled-components';

export const Container = styled.div`
  img {
    width: ${({ size }) => (size && size > 0 ? `${size}px` : `36px`)};
    height: ${({ size }) => (size && size > 0 ? `${size}px` : `36px`)};
    border-radius: 50%;
  }
`;
