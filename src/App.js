import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./modules/Home";
import Exercise1 from "./modules/Exercise1/Exercise1";
import Exercise2 from "./modules/Exercise2/Exercise2";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise1" element={<Exercise1 />} />
          <Route path="/exercise2" element={<Exercise2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
