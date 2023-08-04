import React, { useEffect, useState } from 'react'
import { API } from '../api'
import "./efct.css"

export default function Index() {

  const [ler, setLer] = useState([])

  useEffect(() => {
    (async () => {
      const req = await API.get("/")
      const res = await req.data

      setLer(res)

    })()
  }, [])

  console.log(ler)

  return (
    <div className="container">
      <div className="">
        <br /><br /><br /><br /><br />

        <div class="card-deck mt-5">
          {ler.map((f) => (
            <div key={f.id} class="col-sm-3 box1">
              <a href={f.video} target="_blank" rel="noopener noreferrer">
                <img class="card-img-top rounded" src={f.imagem} alt="img" />
              </a>
              <div class="">
                <img src="bola.jpg" style={{ width: 30, borderRadius: 70 }} alt="img" />

                <p class="card-title font-weight-bold text-white">
                  {f.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
