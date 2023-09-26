import React from "react";
import { Button } from "@mui/material";
import "./style.css";

interface ButtonProps{
    onclick: () => void
    texto: string; 
}

export const ButtonStyle = ({onclick, texto}:ButtonProps) => 
 {

  return (
    <>
        <Button onClick={onclick} className="glow-on-hover">{texto}</Button>
    </>
  );
};
