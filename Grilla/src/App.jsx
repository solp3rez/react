import React from "react";
import { Grilla } from "./complements/Grilla";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>Materias</header>
      <main>
        <Grilla />
      </main>
      <footer>
        <h2>Hecho por Sol Perez</h2>
        <a href="https://github.com/solp3rez/Programacion-web-.git">github</a>
        <a href="mailto:axelweath@gmail.com">email</a>
      </footer>
    </div>
  );
}

export default App;
