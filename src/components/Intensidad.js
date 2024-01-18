import React, { useState } from "react";
import "./styles.intensidad.css"; 

export function Intensidad() {
  const luz = ["apagado", "encendido al 25%", "encendido al 50%", "encendido al 75%", "encendido al 100%"];
  const [luzInten, setLuzInten] = useState(0);

  function aumentar() {
    if (luzInten < luz.length - 1) {
      setLuzInten(luzInten + 1);
    } else {
      setLuzInten(0);
    }
  }

  function disminuir() {
    if (luzInten > 0) {
      setLuzInten(luzInten - 1);
    } else {
      setLuzInten(luz.length - 1);
    }
  }

  function resetear() {
    setLuzInten(0);
  }

  return (
    <div className="intensidad-container">
      <div className="intensidad-texto">Intensidad de Luz: {luz[luzInten]}</div>
      <button className="boton-aumentar" onClick={aumentar}>Aumentar</button>
      <button className="boton-disminuir" onClick={disminuir}>Disminuir</button>
      <button className="boton-resetear" onClick={resetear}>Resetear</button>
    </div>
  );
}

