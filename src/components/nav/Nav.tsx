import { ReactNode, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToustAlerta"


const Nav = () => {

    const navigate = useNavigate()

    const {usuario,handleLogout} = useContext(AuthContext)

    function logout (){
      handleLogout()
     ToastAlerta('O usuario foi desconectado com sucesso', "sucesso")
      navigate('/')
    }

    let componente : ReactNode;

    if(usuario.token !== ""){
      componente = (
        <div className='flex justify-between p-4 bg-indigo-900 text-white '>
    <div>
        <Link to='/home' className="text-2xl font-bold hover:drop-shadow-[2px_2px_4px_red]">Blog Pessoal</Link>
    </div>
    <div>
    <ul className='flex gap-3'>
        <li  className="  text-white hover:underline hover:text-red-500 hover:drop-shadow-[2px_2px_4px_red] " > <Link to='/postagens'> Postagens  </Link> </li>

        <Link to='/temas' className='hover:underline hover:drop-shadow-[2px_2px_4px_red] hover:text-red-500'>Temas</Link>

        <Link to='/cadastrartema' className='hover:underline hover:drop-shadow-[2px_2px_4px_red] hover:text-red-500'>Cadastrar tema</Link>

        <li className=" text-white hover:text-red-500 hover:drop-shadow-[2px_2px_4px_red] hover:underline " >  <Link to='/perfil'>Perfil</Link> </li>

        <li className=" text-white hover:text-red-500 hover:drop-shadow-[2px_2px_4px_red] hover:underline " >  <Link to='/login'>Sair</Link> </li>

       
    </ul>
    </div>
 </div>
      )
    }

  return (
 <>
  {componente}
 </>
  )
}

export default Nav

