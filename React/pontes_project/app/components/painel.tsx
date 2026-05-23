import React, { Children } from "react"

type painelProps = {
    titulo: string,
    children: React.ReactNode,
    acao: () => void
}

export default function Painel(valores : painelProps){

    return (
        <>
            <div className="bg-white shadow-xl p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-blue-500">{valores.titulo}</h2>
                <div> {valores.children}</div>

                <button className="bg-blue-500 text-white p-1 rounded-lg mt-3" onClick={valores.acao}> Executar Ação </button>
        
            </div>
        </>
    )
}