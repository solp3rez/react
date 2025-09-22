import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Grilla } from "./complements/Grilla";
import Ingles from "./complements/materias/Ingles";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header>Materias</header>
        <main>
          <Routes>
            <Route path="/" element={<Grilla />} />
            <Route path="/ingles" element={<Ingles />} />
            {/* agregá rutas para las demás materias */}
          </Routes>
        </main>
        <footer>
          <h2>Hecho por Sol Perez</h2>
          <a href="https://github.com/solp3rez/Programacion-web-.git">github</a>
          <a href="mailto:axelweath@gmail.com">email</a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
