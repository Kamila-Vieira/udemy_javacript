import Link from 'next/link';
import styled, { css } from 'styled-components';

export const Container = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.medium};
    font-style: italic;
  `}

  a {
    margin: 0 5px;
  }
`;

export const Date = styled.span`
  margin: 0 5px;
`;
