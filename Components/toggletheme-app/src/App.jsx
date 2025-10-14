import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.3s ease-in-out"
  };

  const buttonStyle = {
    backgroundColor: theme === "dark" ? "#fff" : "#333",
    color: theme === "dark" ? "#000" : "#fff",
    margin: "16px",
    padding: "16px",
    borderRadius: '15px'
  }
  

  return (
    <div style={appStyle}>
      <h1>{theme.toUpperCase()} MODE</h1>
      <button style={buttonStyle} onClick={toggleTheme}>Switch to {theme === 'light' ? 'dark' : 'light'}</button>
    </div>
  )
}

export default App
