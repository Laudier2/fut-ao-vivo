import React from "react";
import Nav from "./components/Nav";
import Index2 from "./components/Index";
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
          <Nav />
          <Index2 />
        
      </BrowserRouter>      
    </div>
  );
}

export default App;
