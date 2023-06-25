import { ReactNode, createContext, useEffect, useState } from 'react'
import { API_AXIOS } from '../lib/axios'

export interface RepoIssueProps {
  id: number
  quantityComment: number
  createdAt: string
  closedAt?: string
  repositoryUrl: string
  content: string
  title: string
}

interface IssueProviderProps {
  children: ReactNode
}

interface IssueContextType {
  issues: RepoIssueProps[]
  fetchIssues: (query?: string) => Promise<void>
}

export const IssueContext = createContext({} as IssueContextType)

export function IssueProvider({ children }: IssueProviderProps) {
  const [issues, setIssues] = useState<RepoIssueProps[]>([])

  async function fetchIssues() {
    const response = await API_AXIOS.get(
      '/repos/jsguillerme/rocketseat-challenge-github-blog/issues',
    )

    if (!response.data.length) {
      return
    }

    response.data.map((issue: any) => {
      return setIssues([
        {
          title: issue.title,
          content: issue.body,
          createdAt: issue.created_at,
          id: issue.id,
          quantityComment: issue.comments,
          repositoryUrl: issue.repository_url,
          closedAt: issue.closed_at,
        },
      ])
    })
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssueContext.Provider value={{ fetchIssues, issues }}>
      {children}
    </IssueContext.Provider>
  )
}
