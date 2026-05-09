'use client'
import { useState } from 'react';
import InputForm from "./components/inputForm";
import ShopTenis from './components/shoppTenis';

export default function Home() {
  const [showShop, setShowShop] = useState(false);
  function handleEntrar() { setShowShop(true); }
  if (showShop) { return <ShopTenis />;}

  return (

    <>
    <div className="flex flex-col h-screen bg-gray-300">
      
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="bg-gray-100 h-100 w-100 p-6 rounded-lg shadow-lg">
          
          <p className="font-bold text-3xl text-black text-center">Login</p>
          
          <InputForm label="Email" placeholder="Digite seu email" type="email"/>

          <div>
            <h3 className="text-black p-1 mt-4">Senha</h3>
            <input type="password" className=" text-black border p-1 rounded w-full" placeholder="Digite sua senha"/>
          </div>

          <a href="#"><button onClick={handleEntrar} className="bg-blue-600 text-white p-2 rounded mt-6 w-full cursor-pointer">Entrar</button></a>

          <div className="flex justify-center items-center mt-2">
            <p className="text-gray-600 text-xs">Ainda não tem uma conta?</p>
            <a href="#" className="text-blue-600 text-xs">Cadastre-se</a>
          </div>
        </div>
      </div>
    </div>
    </>

  )
}

