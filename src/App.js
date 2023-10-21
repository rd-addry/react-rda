import './styles/main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import NoPage from './pages/NoPage'
import MainLayout from './pages/MainLayout'



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="*" element={<NoPage />} />
        </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );}
