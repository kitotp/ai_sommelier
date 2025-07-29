import './App.css'
import HomePage from './pages/HomePage/ui/HomePage'
import HowItWorks from './pages/HomePage/ui/HowItWorks'
import Header from './widgets/header/Header'

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <HowItWorks />
    </div>
  )
}

export default App
