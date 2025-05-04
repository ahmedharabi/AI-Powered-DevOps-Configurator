import { Github } from "lucide-react"
import "../styles/Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo-link">
          <div className="logo">
            <span className="logo-text">SD</span>
          </div>
          <span className="app-name">Smart DevOps</span>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="github-link">
          <Github className="github-icon" />
          <span className="sr-only">GitHub</span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
