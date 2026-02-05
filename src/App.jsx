import './App.css'
import FormValidation from './assets/Formvalidation'
import { ThemeProvider } from './assets/ThemeContext'
import ThemeToggle from './assets/ThemeToggle'
import OptimizedList from './assets/OptmizedList'

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <FormValidation />
      <OptimizedList />
    </ThemeProvider>
  )
}

export default App
