import { CardsList } from '../../components/CardsList'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { HomeContainer, HomeContent } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <Profile />
        <SearchForm />
        <CardsList />
      </HomeContent>
    </HomeContainer>
  )
}
