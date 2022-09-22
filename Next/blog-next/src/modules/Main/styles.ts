import styled, { css } from 'styled-components';

export const Container = styled.main`
  min-height: calc(100vh - 172px);

  ${({ theme }) => css`
    max-width: 98rem;
    font-size: ${theme.font.sizes.medium};
    margin: 0 auto;
    padding: ${theme.spacings.medium};
  `}
`;
