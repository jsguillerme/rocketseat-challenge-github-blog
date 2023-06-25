import { useParams } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useCallback, useContext, useEffect, useState } from 'react'
import { IssueContext, RepoIssueProps } from '../../contexts/IssueContext'
import ReactMarkdown from 'react-markdown'
// import SyntaxHighlighter from 'react-syntax-highlighter'
// import dracula from 'react-syntax-highlighter/dist/esm/styles/hljs/dracula'
import {
  Calendar,
  ChevronLeft,
  ExternalLink,
  Github,
  MessageCircle,
} from 'lucide-react'

import {
  PostContainer,
  PostContent,
  PostContentHeader,
  PostContentDetails,
} from './style'

export function Post() {
  const { issues } = useContext(IssueContext)
  const { id } = useParams()
  const [post, setPost] = useState<RepoIssueProps>()

  const searchIssueById = useCallback(
    (id: number) => {
      return setPost(issues.filter((issue) => issue.id === id)[0])
    },
    [issues],
  )

  useEffect(() => {
    searchIssueById(Number(id))
  }, [searchIssueById, id])

  return (
    <PostContainer>
      <PostContent>
        <PostContentHeader>
          <section>
            <a href="/">
              <ChevronLeft />
              <p>VOLTAR</p>
            </a>
            <a href={post?.repositoryUrl}>
              <p>VER NO GITHUB</p>
              <ExternalLink />
            </a>
          </section>
          <main>
            <h2>{post?.title}</h2>
            <div>
              <div>
                <Github />
                <span>{post?.user.login}</span>
              </div>
              <div>
                <Calendar />
                <span>
                  {formatDistanceToNow(
                    new Date(post?.createdAt || new Date()),
                    {
                      addSuffix: true,
                      locale: ptBR,
                    },
                  )}
                </span>
              </div>
              <div>
                <MessageCircle />
                <span>{post?.quantityComment} comentário(s)</span>
              </div>
            </div>
          </main>
        </PostContentHeader>
      </PostContent>

      <PostContentDetails>
        <ReactMarkdown>{post?.content || ''}</ReactMarkdown>
      </PostContentDetails>
    </PostContainer>
  )
}
