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
        span {
          margin-left: 20px;
          font-weight: bold;

          &:first-of-type {
            text-transform: capitalize;
          }
        }
      }

      &:last-child {
        display: flex;
        align-items: center;
        a {
          margin-right: 10px;
        }
      }
    }

    & + div {
      border-top: 1px solid #eee;
    }
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;