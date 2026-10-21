import { useState } from 'react'
import Navbar from './Navbar'
import './App.css'

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className="app">
      <Navbar loggedIn={loggedIn} onLogin={() => setLoggedIn(true)} onLogout={() => setLoggedIn(false)} />
      <main className="content">
        <div className="card">
          <h1>{loggedIn ? 'Welcome back' : 'Please log in'}</h1>
          <p>
            {loggedIn
              ? 'You are signed in. Use the menu at the top right to log out.'
              : 'Use the user menu at the top right to log in.'}
          </p>
        </div>
      </main>
    </div>
  )
}
