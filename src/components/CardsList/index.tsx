import { useContext } from 'react'
import { IssueContext } from '../../contexts/IssueContext'
import { Card } from './Card'
import { CardListContainer } from './styles'

export function CardsList() {
  const { issues } = useContext(IssueContext)

  return (
    <CardListContainer>
      {issues.map((issue) => {
        return (
          <Card
            key={issue.id}
            content={issue.content}
            id={issue.id}
            createdAt={issue.createdAt}
            title={issue.title}
            issueNumber={issue.issueNumber}
          />
        )
      })}
    </CardListContainer>
  )
}
