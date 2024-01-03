import { useState } from 'react'
import { Button } from "@material-tailwind/react";
import { MyNavbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyNavbar />
      <Footer />
    </>
  )
}

export default App
