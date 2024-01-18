import React, { useState } from "react";
import "./styles.intensidad.css"; 

export function Intensidad() {
  const luz = ["apagado", "encendido al 25%", "encendido al 50%", "encendido al 75%", "encendido al 100%"];
  const [indice, setIndice] = useState(0);

  function aumentar() {
    if (indice < luz.length - 1) {
      setIndice(indice + 1);
    } else {
      setIndice(0);
    }
  }

  function disminuir() {
    if (indice > 0) {
      setIndice(indice - 1);
    } else {
      setIndice(luz.length - 1);
    }
  }

  function resetear() {
    setIndice(0);
  }

  return (
    <div className="intensidad-container">
      <div className="intensidad-texto">Intensidad de Luz: {luz[indice]}</div>
      <button className="boton-aumentar" onClick={aumentar}>Aumentar</button>
      <button className="boton-disminuir" onClick={disminuir}>Disminuir</button>
      <button className="boton-resetear" onClick={resetear}>Resetear</button>
    </div>
  );
}

