import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const name = "Tiago";
  const surName ="Silva";
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Created by {name} {surName}</h1>
      <div className="card">
      </div>
      <p className="read-the-docs">
        Copyright {currentYear}
      </p>
    </>
  )
}

export default App
