import './App.css'
import { Films } from './components/Films/Films'
import { Header } from './components/Header/Header'
import Library from './components/Library/Library'
import { Paginator } from './components/Pagination/Pagination'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/*" element={<Films />} />
        <Route path="/library" element={<Library />} />
      </Routes>
      <Paginator />
    </div>
  )
}

export { App }
