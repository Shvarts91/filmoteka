import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Library from './Pages/Library/Library'
import { Home } from './Pages/Home/Home'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'
import { fetchGenres } from './api/api'
import './css/app.css'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGenres())
  }, [dispatch])
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route className="active" path="/*" element={<Home />} />
          <Route className="active" path="/library" element={<Library />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export { App }
