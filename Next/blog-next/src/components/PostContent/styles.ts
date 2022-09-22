import styled, { css, DefaultTheme } from 'styled-components';

const headingCommonStyles = (theme: DefaultTheme, size: number) => css`
  margin-bottom: calc(10px * ${size});
  color: ${theme.colors.darkGray};
  font-size: calc(${theme.font.sizes.large} * ${size});
`;

export const Container = styled.div``;

export const Image = styled.img`
  max-width: 100%;

  display: block;
  margin: ${({ theme }) => theme.spacings.medium} auto;
`;

export const Heading1 = styled.h3`
  ${({ theme }) => headingCommonStyles(theme, 2)}
`;

export const Heading2 = styled.h4`
  ${({ theme }) => headingCommonStyles(theme, 1.5)}
`;

export const HeadingCommon = styled.strong`
  display: block;
  ${({ theme }) => headingCommonStyles(theme, 1)}
`;

export const Paragraph = styled.p``;
export const Code = styled.code``;
