import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 42rem;
  height: 26rem;
  padding: 3.2rem;

  background: ${(props) => props.theme['base-post']};

  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const CardContentHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h2 {
    max-width: 28rem;
    font-size: 2rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 1.4rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-span']};
  }
`
export const CardContentSummary = styled.section`
  color: ${(props) => props.theme['base-text']};
  max-height: 14rem;
  overflow: hidden;

  p {
    text-overflow: ellipsis;
  }
`
