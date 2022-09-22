import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme: { colors, font, spacings } }) => css`
    color: ${colors.darkGray};
    font-size: ${font.sizes.small};
    padding: ${spacings.medium};
    text-align: center;
    background-color: ${colors.lightGray};
  `};
`;
