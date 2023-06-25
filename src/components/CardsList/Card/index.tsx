/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom'
import { CardContainer, CardContentHeader, CardContentSummary } from './style'

interface CardProps {
  content: string
  title: string
  createdAt: string
  id: number
  issueNumber: number
}

export function Card({
  content,
  title,
  createdAt,
  id,
  issueNumber,
}: CardProps) {
  const navigate = useNavigate()

  function handleViewPost() {
    navigate({ pathname: `/posts/${id}` })
  }

  return (
    <CardContainer onClick={handleViewPost}>
      <CardContentHeader>
        <h2>{title}</h2>
        <span>{createdAt}</span>
      </CardContentHeader>
      <CardContentSummary>
        <p>{content}</p>
      </CardContentSummary>
    </CardContainer>
  )
}
