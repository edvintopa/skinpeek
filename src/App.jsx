import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Peek from './pages/Peek/Peek'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/peek/:player' element={<Peek />} />
        </Routes>
      </Router>
    </>
  )
}

export default App