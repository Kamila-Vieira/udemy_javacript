import styled, { css } from 'styled-components';

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;

  ${({ theme: { colors, font, spacings } }) => css`
    background: ${colors.primary};
    color: ${colors.white};
    font-size: ${font.sizes.large};
    padding: ${spacings.medium};
    text-align: center;
  `};

  a {
    color: ${({ theme: { colors } }) => colors.white};
  }
`;
