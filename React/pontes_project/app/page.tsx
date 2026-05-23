function Componente() {
  const lista = [

{
  nome: 'João',
  idade: 30
},
{
  nome: 'Maria',
  idade: 25
},


  ]

  return (
    <>
      <h1>Lista de nomes</h1>
      <ul>
        {lista.map((item, index) => (
          <li key={index}> meu nome é {item.nome} e minha idade é {item.idade}</li>
        ))}
      </ul>
    
    
    </>
  )
}


export default function Home() {
  return (
    <>
      <h1>Olá, mundo!</h1>
      <Componente />
    </>
  )
}