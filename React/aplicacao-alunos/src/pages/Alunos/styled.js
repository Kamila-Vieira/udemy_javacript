import styled from 'styled-components';

export const AlunoContainer = styled.div`
  margin-top: 20px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
    & > div {
      &:first-child {
        display: flex;
        align-items: center;

        & > div:last-child {
          display: flex;
          align-items: center;

          span {
            margin-left: 20px;
            font-weight: bold;

            &:first-of-type {
              text-transform: capitalize;
            }
          }

          @media (max-width: 460px) {
            align-items: flex-start;
            flex-direction: column;
            margin-left: 10px;

            span {
              margin-left: 0;
            }
          }
        }
      }

      &:last-child {
        display: flex;
        align-items: center;
        column-gap: 10px;
      }
    }

    & + div {
      border-top: 1px solid #eee;
    }
  }
`;
