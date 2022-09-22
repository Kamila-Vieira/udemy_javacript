import styled, { css } from 'styled-components';

export const Container = styled.div`
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const Cover = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.small};
  max-height: 200px;
  min-height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  min-height: 100%;
  display: block;
  transition: transform 0.5s ease-out;

  &:hover {
    transform: scale(2);
    transition: transform 0.5s ease-out;
  }
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};

    a {
      color: ${theme.colors.darkGray};
    }
  `}
`;
