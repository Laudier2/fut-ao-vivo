import React from 'react'

const valores = [
  {
    id: 1,
    name: "Botafogo X Bragantino",
    img: "https://multicanais.fans/wp-content/uploads/2023/07/Botafogo-x-Bragantino-Ao-Vivo-Online-249x140.jpg"
  },
  {
    id: 2,
    name: "River Olate X Estudiantes",
    img: "https://multicanais.fans/wp-content/uploads/2023/07/River-Plate-x-Estudiantes-de-La-Plata-Ao-Vivo-Online-249x140.jpg"
  },
  {
    id: 1,
    name: "Botafogo X Bragantino",
    img: "https://multicanais.fans/wp-content/uploads/2023/07/Botafogo-PB-x-Aparecidense-Ao-Vivo-Online-249x140.jpg"},
  {
    id: 1,
    name: "Botafogo X Bragantino",
    img: "https://multicanais.fans/wp-content/uploads/2023/07/Ponte-Preta-x-Tombense-Ao-Vivo-Online-249x140.jpg"
  },
  {
    id: 1,
    name: "Botafogo X Bragantino",
    img: "https://multicanais.fans/wp-content/uploads/2023/07/Londrina-x-Vila-Nova-Ao-Vivo-Online-249x140.jpg"
  },
  {
    id: 1,
    name: "Botafogo X Bragantino",
    img: "https://multicanais.fans/wp-content/uploads/2023/07/Corinthians-x-America-MG-Ao-Vivo-Online-249x140.jpg"
  },
]

export default function Index() {

  const ds = valores.map(f => f.img)

  console.log(ds)

  return (
    <div className="container"> 
    <div className="container">
      <div class="card-deck mt-5">
        {valores.map((f) => (
          <div key={f.id} class="card">
          <a href="https://multijogos.net/assistir-athletico-pr-x-flamengo-ao-vivo-online-hd-12-07-2023/" target="_blank" rel="noopener noreferrer">
              <img class="card-img-top rounded " style={{boxShadow: "box-shadow: 0 0 0 10px #1111"}} src={f.img} alt="img"/>
              <img src="https://cdn.awsli.com.br/274/274010/produto/86972149/c58a037425.jpg" style={{width: 30}} alt="img"/>
          </a>
        <div class="card-body">
            
            <p class="card-title font-weight-bold">
                Assistir Athletico-PR x Flamengo Ao Vivo Online HD 12/07/2023
            </p>
        </div>
      </div>
        ))} 
      </div>
    </div>
  </div>  
  )
}
