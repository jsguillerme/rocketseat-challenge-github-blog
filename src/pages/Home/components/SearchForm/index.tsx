import { useContext } from 'react'
import { SearchFormContainer } from './styles'
import { IssueContext } from '../../../../contexts/IssueContext'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchInputSchema = z.object({
  query: z.string(),
})

type SearchInput = z.infer<typeof searchInputSchema>

export function SearchForm() {
  const { issues, fetchIssuesByQuery } = useContext(IssueContext)
  const { register } = useForm<SearchInput>({
    resolver: zodResolver(searchInputSchema),
  })

  async function handleSearchIssue(data: SearchInput) {
    await fetchIssuesByQuery(data.query)
  }

  return (
    <SearchFormContainer>
      <div>
        <p>Publicações</p>
        <span>
          {issues.length === 1
            ? '1 publicação'
            : `${issues.length} publicações`}{' '}
        </span>
      </div>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query')}
        onChange={(e) => handleSearchIssue({ query: e.target.value })}
      />
    </SearchFormContainer>
  )
}
