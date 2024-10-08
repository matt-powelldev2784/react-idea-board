import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { NotFound, Home, CreateIdea, IdeaList } from './components/pages'
import { Blank, ErrorPage, NavigationBar } from './components'

const AppRouter = () => (
  <Router>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-idea" element={<CreateIdea />} />
      <Route path="/idea-list" element={<IdeaList />} />
      <Route path="blank" element={<Blank />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
)

export default AppRouter
