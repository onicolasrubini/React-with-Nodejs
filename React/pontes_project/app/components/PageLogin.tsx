import InputForm from "./InputForm";


export default function Home(){

  var name = "Pontes"

  return (
  //React fragment
    <>
     <div className="flex flex-col h-screen bg-gray-300">

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="bg-gray-100 h-100 w-100 p-6 rounded-lg">


          <h1 className=" text-black text-xl font-bold mb-4 text-center">Login</h1>
          
          <div className="email">
            <h2 className="text-lg text-black p-1">Email</h2>
            <input type="email" placeholder="Digite seu email:" className="text-black mb-2 p-2 border border-black rounded w-full" />
          </div>

          <InputForm
            label="Email"
            placeholder="Digite seu email"
            type="email"
          />
          <InputForm
            label="Confirmar Senha"
            placeholder="Confirme sua senha"
            type="password"
          />

          <div className="senha">
            <h2 className="text-lg text-black p-1">Senha</h2>
          <input type="password" placeholder="Digite sua senha:" className="text-black mb-2 p-2 border border-black rounded w-full" />
          </div>

          <button className="bg-blue-800 text-white p-2 rounded mt-4 w-full">Entrar</button>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm">

            <p className="text-black">Ainda não tem uma conta?</p>
            <a href="#" className="text-blue-800 hover:underline">Cadastre-se</a>

          </div>
        </div>

      




      </div>
    </div>








    </>
  )
}