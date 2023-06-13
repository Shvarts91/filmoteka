import './App.css'
import { Films } from './components/Films/Films'
import { Paginator } from './components/Pagination/Pagination'

function App() {
  return (
    <div className="App">
      <Films />

      <Paginator />
    </div>
  )
}

export { App }
