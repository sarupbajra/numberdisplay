import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
import Main from "./pages/view/main"

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element= {<Welcome/>} />
        <Route path="/main" element= {<Main/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
