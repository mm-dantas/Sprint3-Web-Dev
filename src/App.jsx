import './App.css'
import Header from './Componetes/Header'
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
