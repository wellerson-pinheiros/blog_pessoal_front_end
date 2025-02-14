

const Footer = () => {
  return (
    <div id='Pai'className=" w-full fixed bottom-0 left-0 flex flex-col items-center justify-center bg-indigo-900 " >
        <div id='filho'>
           <h3 className="font-bold text-white">
                Brog Pessoal|Wellerson Pinheiros|Copyrigth: 2025
           </h3>
        </div>
        <div id='irmao'>
            <p className="text-white">
                Acesse as nossas Redes Sociais
            </p>
        </div>
        <div id='imgsLink ' className="flex p-4">

               <a  href="https://www.linkedin.com/notifications/?filter=all"> <img className="hover:drop-shadow-[2px_2px_4px_red]" src="https://ik.imagekit.io/50n5k5wmb/linkedin-logo.svg?updatedAt=1739541236428" alt=" Logo do linkedim" /> </a>

               <a href="https://github.com/wellerson-pinheiros"> <img className="hover:drop-shadow-[2px_2px_4px_red]"src="https://ik.imagekit.io/50n5k5wmb/github-logo.svg?updatedAt=1739541276257" alt="Logo do gitHub" /> </a>

               <a href="https://www.instagram.com/pinheiroswellerson/"> <img className="hover:drop-shadow-[2px_2px_4px_red]"src="https://ik.imagekit.io/50n5k5wmb/instagram-logo.svg?updatedAt=1739541326167" alt="Logo do Instagram" /> </a>
        </div>
    </div>
  )
}

export default Footer