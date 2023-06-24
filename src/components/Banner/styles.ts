import styled from 'styled-components'

export const BannerContainer = styled.header`
  width: 100%;
  height: 28rem;
  background: ${(props) => props.theme['blue-dark']};

  display: grid;
  place-items: center;
`
