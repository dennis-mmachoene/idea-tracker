import './App.css'
import { UserProvider } from './lib/context/user'
import Login from './pages/Login'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  const isLoginPage = window.location.pathname === '/login'

  return (
    <div>
     <UserProvider>
      <Navbar />
      <main>
        {isLoginPage ? <Login />: <Home />}
      </main>
     </UserProvider>
    </div>
  )
}

export default App
