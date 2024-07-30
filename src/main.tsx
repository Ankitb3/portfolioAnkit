import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Sparkle } from './components/Sparkle.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <ThemeProvider>
    <Sparkle>  <App />
    </Sparkle>
    </ThemeProvider>
  </BrowserRouter>,
)
