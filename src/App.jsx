import './App.css'

import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Menu from './components/Menu';

function App() {

  return (
    <>
     <Menu />
     <Outlet/>
     <Footer />
    </>
  )
}

export default App
