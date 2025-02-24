
import { createContext, ReactNode, useState } from "react";
import UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../models/services/Service";
import { ToastAlerta } from "../utils/ToustAlerta";


interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise <void>
    isLoading: boolean
}

interface AuthProviderProps{
    children: ReactNode
}
export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id:0,
        nome: "",
        usuario: "",
        senha:"",
        foto: "",
        token:""
    })
        const [isLoading,setIsLoading] = useState<boolean>(false)

    async function handleLogin(UsuarioLogin: UsuarioLogin) {
        setIsLoading(true)
        try{
            await login('/usuarios/logar', UsuarioLogin, setUsuario)
            ToastAlerta('O Usúario foi autenticado com sucesso!', "sucesso")
        }catch(error){
            ToastAlerta('Os dados do Usuario estão incompativeis', "erro")
        } 
        setIsLoading(false)
    }
    
function handleLogout(){
    setUsuario({
        id:0,
        nome: "",
        usuario: "",
        senha:"",
        foto: "",
        token:"",
    })
}

    return(
        <AuthContext.Provider value={{usuario,handleLogin,handleLogout,isLoading}}>
            {children}
        </AuthContext.Provider>
    )

}