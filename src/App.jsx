import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Features from './pages/Features'
import Blog from './pages/Blog'
import Policy from './pages/Policy'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/main" replace />} />
        <Route path="main" element={<Home app="main" />} />
        <Route path="main/features" element={<Features app="main" />} />
        <Route path="main/blog" element={<Blog app="main" />} />
        <Route path="main/policy" element={<Policy app="main" />} />
        <Route path="edit" element={<Home app="edit" />} />
        <Route path="edit/features" element={<Features app="edit" />} />
        <Route path="edit/blog" element={<Blog app="edit" />} />
        <Route path="edit/policy" element={<Policy app="edit" />} />
      </Route>
    </Routes>
  )
}
