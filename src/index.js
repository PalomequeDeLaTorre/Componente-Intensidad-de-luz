import React from "react";
import ReactDom  from "react-dom/client";
import {Intensidad} from "./components/Intensidad";

const root=ReactDom.createRoot(document.getElementById("root"));

root.render(
    <>
       <Intensidad/>
    </>
)