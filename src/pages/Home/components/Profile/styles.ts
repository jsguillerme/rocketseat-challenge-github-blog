import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 90rem;
  height: 22rem;

  margin-top: -10rem;
  border-radius: 1rem;

  background: ${(props) => props.theme['base-profile']};

  display: flex;
  align-items: center;
  justify-content: center;
`
export const ProfileContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 3.2rem 10rem;

  img {
    width: 15rem;
    height: 15rem;
    object-fit: cover;
    border-radius: 8px;
  }

  display: flex;
  align-items: center;
  gap: 3.2rem;

  p {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 160%;
  }
`
export const ProfileDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  color: ${(props) => props.theme.white};
`

export const DetailsUserName = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 2.4rem;
    line-height: 130%;
  }

  a {
    border-bottom: 1px solid transparent;
    padding-bottom: 0.5rem;

    font-size: 1.2rem;
    font-weight: bold;
    line-height: 160%;

    color: ${(props) => props.theme.blue};

    display: flex;
    align-items: center;
    gap: 8px;

    cursor: pointer;
    text-decoration: none;

    svg {
      width: 1.8rem;
      height: 1.8rem;
    }

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
      transition: border 0.3s;
    }
  }
`
export const DetailsInfosUser = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      color: ${(props) => props.theme['base-label']};
      width: 1.8rem;
      height: 1.8rem;
    }

    span {
      color: ${(props) => props.theme['base-subtitle']};
      line-height: 160%;
    }
  }
`
