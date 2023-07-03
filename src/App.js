import './App.css'
import Library from './Pages/Library/Library'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export { App }
