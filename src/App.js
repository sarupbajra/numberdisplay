import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './component/pages/view/main';
import Welcome from "./component/pages/welcome/Welcome";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element= {<Welcome/>} />
        <Route path="/" element= {<main/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
