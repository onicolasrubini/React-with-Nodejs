"use client"
import { useState } from "react"

export default function Home() {
    const [visivel, setVisivel] = useState(true)


    function setVisibilidade() {
        setVisivel(v => !v)
        console.log("Visibilidade alterada:", !visivel)
    }

    return (
        <>
        <div className="flex justify-center">
            <div className=""> </div>

        </div>
        <h1>Componente de Visibilidade</h1>
        <button onClick={setVisibilidade}>{visivel ? "Esconder" : "Mostrar"}</button>
        {visivel && <p>Este texto pode ser escondido ou mostrado.</p>}

        <p>O estado atual é: {visivel ? "Visível" : "Escondido"}</p>
        </>
    )
}