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
  const content = `Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

  ${'[Dynamic typing](https://github.com/jsguillerme)'}
  JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:`

  // const markdown = `A paragraph with *emphasis* and **strong importance**.

  //   > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

  //   * Lists
  //   * [ ] todo
  //   * [x] done

  //   A table:

  //   | a | b |
  //   | - | - |
  // `

  // {() => {
  //   return (
  //     <div>
  //       <p>Here is some JavaScript code:</p>
  //       <pre>
  //         <SyntaxHighlighter language="js" style={dracula} PreTag="div">
  //           {markdown}
  //         </SyntaxHighlighter>
  //       </pre>
  //     </div>
  //   )
  // }}

  return (
    <PostContainer>
      <PostContent>
        <PostContentHeader>
          <section>
            <a href="#">
              <ChevronLeft />
              <p>VOLTAR</p>
            </a>
            <a href="#">
              <p>VER NO GITHUB</p>
              <ExternalLink />
            </a>
          </section>
          <main>
            <h2>JavaScript data types and data structures</h2>
            <div>
              <div>
                <Github />
                <span>Cameronwll</span>
              </div>
              <div>
                <Calendar />
                <span>Há 1 dia</span>
              </div>
              <div>
                <MessageCircle />
                <span>5 comentários</span>
              </div>
            </div>
          </main>
        </PostContentHeader>
      </PostContent>

      <PostContentDetails>
        <ReactMarkdown>{content}</ReactMarkdown>
      </PostContentDetails>
    </PostContainer>
  )
}
