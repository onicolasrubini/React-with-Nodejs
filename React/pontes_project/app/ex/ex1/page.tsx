"use client"
import Painel from "@/app/components/painel";



export default function Home(){

  function acao(){
    alert("Clicado")
  }

  return (
    <>
    <div className="flex items-center justify-center h-screen ">

      <Painel titulo="Área do usuário" acao={acao}>
        <p>Bem-vindo ao sistema! essep pedaço veio do children</p>
      </Painel>

      <Painel titulo="Área do usuário" acao={acao}>

        <header className="bg-amber-600">
          <h1>Nova descrição do card</h1>
        </header>
        
      </Painel>

    </div>
    </>
  )
}
