import { ReactNode, createContext, useEffect, useState } from 'react'
import { API_AXIOS, API_AXIOS_ISSUES } from '../lib/axios'

export interface RepoIssueProps {
  id: number
  quantityComment: number
  createdAt: string
  closedAt?: string
  repositoryUrl: string
  content: string
  title: string
  issueNumber: number
  user: {
    login: string
    url: string
    avatarUrl: string
  }
}

interface IssueProviderProps {
  children: ReactNode
}

interface IssueContextType {
  issues: RepoIssueProps[]
  fetchIssues: () => Promise<void>
  fetchIssuesByQuery: (query: string) => Promise<void>
  getIssueById: (id: string) => Promise<void>
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
      return setIssues((state) => {
        return [
          ...state,
          {
            content: issue.body,
            createdAt: issue.created_at,
            id: issue.id,
            issueNumber: issue.number,
            quantityComment: issue.comments,
            repositoryUrl: issue.html_url,
            title: issue.title,
            user: {
              avatarUrl: issue.user.avatar_url,
              login: issue.user.login,
              url: issue.user.html_url,
            },
            closedAt: issue.closed_at,
          },
        ]
      })
    })
  }

  async function fetchIssuesByQuery(query: string) {
    if (query.trim() === '') {
      setIssues([])
      return fetchIssues()
    }

    const queryToSearch = encodeURIComponent(query)
    const response = await API_AXIOS_ISSUES.get('/issues', {
      params: {
        q: `${queryToSearch} repo:jsguillerme/rocketseat-challenge-github-blog`,
      },
    })

    if (response.data.total_count === 0) {
      throw new Error('Não foi possível encontrar essa publicação')
    }

    setIssues([])

    response.data.items.map((issue: any) => {
      return setIssues((state) => {
        return [
          ...state,
          {
            content: issue.body,
            createdAt: issue.created_at,
            id: issue.id,
            issueNumber: issue.number,
            quantityComment: issue.comments,
            repositoryUrl: issue.html_url,
            title: issue.title,
            user: {
              avatarUrl: issue.user.avatar_url,
              login: issue.user.login,
              url: issue.user.html_url,
            },
            closedAt: issue.closed_at,
          },
        ]
      })
    })
  }

  async function getIssueById(id: string) {
    const response = await API_AXIOS.get(
      `/repos/jsguillerme/rocketseat-challenge-github-blog/issues/${id}`,
    )

    if (!response.data.length) {
      return []
    }

    return response.data
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssueContext.Provider
      value={{ getIssueById, fetchIssues, fetchIssuesByQuery, issues }}
    >
      {children}
    </IssueContext.Provider>
  )
}
