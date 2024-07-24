import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { BackgroundGradientAnimation } from './magicui/Gradientbg.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <BackgroundGradientAnimation>
  <App />
  </BackgroundGradientAnimation>
  </BrowserRouter>,
)
