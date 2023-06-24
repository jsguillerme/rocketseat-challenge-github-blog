import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  max-width: 90rem;
  margin-top: 7.2rem;
  margin-bottom: 4.8rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 1rem;

    p {
      font-size: 1.8rem;
      font-weight: bold;
      line-height: 160%;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 1.4rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    width: 100%;
    height: 5rem;
    margin-top: 2.4rem;
    padding: 1.2rem 1rem;

    background: ${(props) => props.theme['base-input']};
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    outline: 0;

    color: ${(props) => props.theme['base-text']};
    font-size: 1.6rem;
    line-height: 160%;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      outline: 1px solid ${(props) => props.theme.blue};
    }
  }
`
