import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Banner } from './components/Banner'

export function AppRouter() {
  return (
    <Router>
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}
