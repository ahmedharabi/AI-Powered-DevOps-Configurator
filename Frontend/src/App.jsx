import Navbar from "./components/Navbar"
import ConfigGenerator from "./components/ConfigGenerator"
import Footer from "./components/Footer"
import "./styles/App.css"

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <h1 className="app-title">Smart DevOps Configurator</h1>
        <p className="app-description">
          Describe your infrastructure needs and we'll generate the configuration files you need to get started.
        </p>
        <ConfigGenerator />
      </main>
      <Footer />
    </div>
  )
}

export default App
