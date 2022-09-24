import styled from 'styled-components';

export const Heading = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  font-size: ${({ theme }) => theme.font.sizes.large};
`;
