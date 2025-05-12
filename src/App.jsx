import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Peek from './pages/Peek/Peek'

function App() {

  return (
    <div className="min-h-screen">
      <header className="mb-6 md:mb-40">
        <h1 className="text-4xl font-bold">SKINPEEK</h1>
      </header>

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/peek/:player' element={<Peek />} />
        </Routes>
      </Router>

      <footer className="mt-20">
        <p className="text-neutral-500">
          Edvin T, Menel A, Viktor A @ MAU 2025
        </p>
      </footer>
    </div>
  )
}

export default App