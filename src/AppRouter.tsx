import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { NotFound, Home, CreateIdea, IdeaList } from './components/pages'

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-idea" element={<CreateIdea />} />
      <Route path="/idea-list" element={<IdeaList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
)

export default AppRouter
