import './App.css'
import { useSelector } from 'react-redux'

function App() {
  const todoFilms = useSelector((state) => state.todoFilms)
  return <div className="App">{todoFilms}</div>
}

export default App
