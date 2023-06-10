import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from "react";
import {fetchMovies} from "./toolkitRedux/toollkitReducer";

function App() {
  const dispatch = useDispatch();
  const { todoFilms } = useSelector(({ movies }) => {
    return movies
  });
  useEffect(()=> {dispatch(fetchMovies())}, [])
  console.log(todoFilms)
  return <div className="App">{todoFilms.map(({title, id}) => <div key={id}>{title}</div>)}</div>
}

export default App
