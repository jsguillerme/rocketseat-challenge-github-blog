import styled from 'styled-components'

export const PostContainer = styled.main`
  width: 100%;
  height: 17rem;
  max-width: 1120px;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PostContent = styled.section`
  width: 100%;
  height: 100%;
  padding: 3.2rem 6rem;

  border-radius: 1rem;

  background: ${(props) => props.theme['base-profile']};
`
export const PostContentHeader = styled.header`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

  main {
    margin-top: 1rem;

    display: flex;
    flex-direction: column;
    gap: 8px;

    h2 {
      font-size: 2.4rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-title']};
    }

    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

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
          color: ${(props) => props.theme['base-span']};
          line-height: 160%;
        }
      }
    }
  }
`
export const PostContentDetails = styled.main`
  width: 100%;
  height: 100%;
  max-width: 1120px;
  padding: 4.2rem 7rem;

  background: transparent;

  color: ${(props) => props.theme['base-text']};
  font-size: 1.6rem;
  line-height: 160%;

  text-align: start;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
  }

  img {
    width: 90rem;
    height: 50rem;
  }
`
