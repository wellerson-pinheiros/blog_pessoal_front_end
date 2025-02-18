import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"


const Nav = () => {

    const navigate = useNavigate()

    const {handleLogout} = useContext(AuthContext)

    function logout (){
      handleLogout()
      alert('O usuario foi desconectado com sucesso')
      navigate('/')
    }


  return (
 <div className='flex justify-between p-4 bg-indigo-900 text-white '>
    <div>
        <Link to='/home' className="text-2xl font-bold hover:drop-shadow-[2px_2px_4px_red]">Blog Pessoal</Link>
    </div>
    <div>
    <ul className='flex gap-3'>
        <li ><a className=" text-white hover:text-red-500 hover:drop-shadow-[2px_2px_4px_red] " href="#">Postagens</a></li>

        <Link to='/temas' className='hover:underline hover:drop-shadow-[2px_2px_4px_red] hover:text-red-500'>Temas</Link>

        <Link to='/cadastrartema' className='hover:underline hover:drop-shadow-[2px_2px_4px_red] hover:text-red-500'>Cadastrar tema</Link>

        <li> <a className=" text-white hover:text-red-500 hover:drop-shadow-[2px_2px_4px_red] " href="#"> Perfil </a></li>

        <li><a className=" text-white hover:text-red-500 hover:drop-shadow-[2px_2px_4px_red] " href="#">Sair</a></li>
    </ul>
    </div>
 </div>
  )
}

export default Nav

