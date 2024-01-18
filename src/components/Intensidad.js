import React, { useState } from "react";
import "./styles.intensidad.css"; 

export function Intensidad() {
  const luz = ["apagado", "encendido al 25%", "encendido al 50%", "encendido al 75%", "encendido al 100%"];
  const [luzIntens, setLuzIntens] = useState(0);

  function aumentar() {
    if (luzIntens < luz.length - 1) {
      setLuzIntens(luzIntens + 1);
    } else {
      setLuzIntens(0);
    }
  }

  function disminuir() {
    if (luzIntens > 0) {
      setLuzIntens(luzIntens - 1);
    } else {
      setLuzIntens(luz.length - 1);
    }
  }

  function resetear() {
    setLuzIntens(0);
  }

  return (
    <div className="intensidad-container">
      <div className="intensidad-texto">Intensidad de Luz: {luz[luzIntens]}</div>
      <button className="boton-aumentar" onClick={aumentar}>Aumentar</button>
      <button className="boton-disminuir" onClick={disminuir}>Disminuir</button>
      <button className="boton-resetear" onClick={resetear}>Resetear</button>
    </div>
  );
}

