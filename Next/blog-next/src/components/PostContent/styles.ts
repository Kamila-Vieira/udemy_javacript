import styled, { css, DefaultTheme } from 'styled-components';

const headingCommonStyles = (theme: DefaultTheme, size: number) => css`
  margin-bottom: calc(10px * ${size});
  color: ${theme.colors.darkGray};
  font-size: calc(${theme.font.sizes.large} * ${size});
`;

export const Container = styled.div`
  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }
  ul,
  ol {
    margin: ${({ theme }) => theme.spacings.medium};
  }
  pre {
    ${({ theme }) => css`
      width: 100%;
      overflow-x: auto;
      background: ${theme.colors.lightGray};
      color: ${theme.colors.darkGray};
      padding: ${theme.spacings.large};
      margin: ${theme.spacings.large} 0;
      line-height: 1.5;
      font-size: ${theme.font.sizes.medium};
    `}
  }
`;

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
