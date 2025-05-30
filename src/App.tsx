import { Route, Routes } from 'react-router'
import './App.css'
import Footer from './components/footer'
import Topbar from './components/topbar'
import Home from './pages/home'
import Projects from './pages/projects'
import About from './pages/about'
import Socials from './pages/socials'

function App() {

  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/socials" element={<Socials />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
