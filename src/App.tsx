import { Route, Routes } from 'react-router'
import './App.css'
import Footer from './components/footer'
import Topbar from './components/topbar'
import Home from './pages/home'
import Projects from './pages/projects'
import About from './pages/about'

function App() {

  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
