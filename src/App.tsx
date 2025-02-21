import { BrowserRouter, Route, Routes } from "react-router-dom"

import Footer from "./components/footer/Footer"
import Nav from "./components/nav/Nav"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Cadastro from "./pages/cadastro/Cadastro"
import { AuthProvider } from "./contexts/AuthContext"
import ListaTemas from "./components/temas/listatemas/ListaTemas"
import FormTema from "./components/temas/formtema/FormTema"
import DeletarTema from "./components/temas/deletartemas/DeletarTema"
import ListaPostagens from "./components/postagens/listapostagens/ListaPostagens"
import FormPostagem from "./components/postagens/formpostagem/FormPostagem"
import DeletarPostagem from "./components/postagens/deletarpostagens/DeletarPostagem"



function App() {
 

  return (
  <>
  <AuthProvider>
    <BrowserRouter>
      <Nav/>
      <div className="min-h-[80vh]">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/" element={<Cadastro />} />
        <Route path="/home" element={<Login/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/temas" element={<ListaTemas />} />
        <Route path="/cadastrartema" element={<FormTema />} />
        <Route path="/editartema/:id" element={<FormTema />} />
        <Route path="/deletartema/:id" element={<DeletarTema />} />
        <Route path="/postagens" element={<ListaPostagens />} />
        <Route path="/cadastrarpostagem" element={<FormPostagem />} />
        <Route path="/editarpostagem/:id" element={<FormPostagem />} />
        <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
      </Routes>
      
      </div>
      <Footer/>
      </BrowserRouter>
      </AuthProvider>
  </>

  
  )
}

export default App
