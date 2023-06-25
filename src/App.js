import './App.css'
import Library from './Pages/Library/Library'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </div>
  )
}

export { App }
