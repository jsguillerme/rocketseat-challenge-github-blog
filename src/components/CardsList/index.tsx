import { useContext } from 'react'
import { Card } from './Card'
import { CardListContainer } from './styles'
import { IssueContext } from '../../contexts/IssueContext'

export function CardsList() {
  const { issues } = useContext(IssueContext)

  return (
    <CardListContainer>
      {issues.map((issue) => {
        return <Card key={issue.id} />
      })}
    </CardListContainer>
  )
}
