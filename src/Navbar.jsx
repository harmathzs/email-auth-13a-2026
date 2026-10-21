import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Navbar({ loggedIn, onLogin, onLogout }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const esc = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', close)
    document.addEventListener('keydown', esc)
    return () => {
      document.removeEventListener('mousedown', close)
      document.removeEventListener('keydown', esc)
    }
  }, [])

  const act = (fn) => () => {
    fn()
    setOpen(false)
  }

  return (
    <header className="navbar">
      <Link to="/">
        <span className="brand">Acme Portal</span>
      </Link>
      <div className="user-menu" ref={ref}>
        <button
          className="avatar-btn"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-label="User menu"
          onClick={() => setOpen(!open)}
        >
          <img src="/user.svg" alt="" />
        </button>
        {open && (
          <ul className="dropdown" role="menu">
            {loggedIn ? (
              <li role="none"><button role="menuitem" onClick={act(onLogout)}>Logout</button></li>
            ) : (
              <li role="none"><button role="menuitem" onClick={act(onLogin)}>Login</button></li>
            )}
          </ul>
        )}
      </div>
    </header>
  )
}
