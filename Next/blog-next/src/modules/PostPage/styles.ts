import Link from 'next/link';
import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Heading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.superLarge};
    margin: ${theme.spacings.large} 0;
    text-align: center;
  `}
`;

export const Cover = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    width: 100%;
    margin-bottom: ${theme.spacings.medium};
  `}
`;
