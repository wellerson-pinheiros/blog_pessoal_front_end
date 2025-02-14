import { BrowserRouter, Route, Routes } from "react-router-dom"
import Algumacoisa from "./components/algumacoisa/Algumacoisa"
import Footer from "./components/footer/Footer"
import Nav from "./components/nav/Nav"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"


function App() {
 

  return (
  <>
    <BrowserRouter>
      <Nav/>
      <div className="min-h-[80vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Login/>} />
      </Routes>
      <Algumacoisa/>
      </div>
      <Footer/>
      </BrowserRouter>
  </>

  
  )
}

export default App
