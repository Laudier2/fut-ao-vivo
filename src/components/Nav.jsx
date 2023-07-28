//import axios from 'axios'
import React from 'react'

export default function Nav() {


  /*useEffect(() => {
     (async () => {
       const url = await axios.get("https://fut-7ac88415d96b.herokuapp.com/api")
       const res = await url
 
       setUpdate(res)
     })()
   }, [])*/

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary" style={{ height: 80 }}>
        <div class="container-fluid">
          <a className="navbar-brand btn btn-dark" href="/">Home</a>
          <button className="navbar-brand btn btn-dark" >Atualize os Jogos</button>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShn-fSb2i9aExJ2nGz9gJtPuzYWCaZo24Pg8S4ccB3UtZGAi_ZDBIcjjhVBHU7XMHPzAY&usqp=CAU" className="rounded mx-auto d-block" alt="img" />

      </nav>
    </div>
  )
}
