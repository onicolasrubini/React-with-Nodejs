"use client"

import { useState } from "react"

export default function Home() {
    const [contador, setContador] = useState(0)

    function incrementar() {
        setContador(a => a + 1)
    }
    
    function decrementar() {
        setContador(c => (c === 0 ? 0 : c - 1))
    }


    return (
        <>
            <h1>Contador: {contador}</h1>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </>
    )
}