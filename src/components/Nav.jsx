//import axios from 'axios'
import React from 'react'
import { API } from '../api'
//import { useNavigate } from 'react-router-dom';

export default function Nav() {

  //const history = useNavigate();

  const Update = async () => {


    const del = await API.delete("/del")

    return (
      del
    )
  }

  const data = {
    "title": "",
    "imagem": "",
    "video": ""
  }

  const Home = async () => {
    const home = await API.post("/api", data)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });

    return (
      home
      /*setTimeout((
        history("/")
      ), 10000)*/
    )
  }

  return (
    <div class>
      <nav className="navbar navbar-dark bg-primary" style={{ height: 80 }}>
        <div class="container-fluid">
          <button className="navbar-brand btn btn-dark" onClick={Home}>Home</button>
          <button className="navbar-brand btn btn-dark" onClick={Update}>Atualize os Jogos</button>
        </div>
        <br /><br /><br />
        <img src="fut.jpeg" className="rounded mx-auto d-block" alt="img" />

      </nav>
      <br /><br />
    </div>
  )
}
