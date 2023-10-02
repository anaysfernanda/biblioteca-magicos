import React, {useState} from "react";
import Card from "@mui/material/Card";
import {
  Button,
  CardActions,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import "./estilo.css";
import { Modal } from "../Modal/modal";
import { Livro } from "../../service/types";

interface CardDefaultProps {
  id: string;
  titulo: string;
  autor: string;
  anoPublicacao: string;
  dataCadastro: string;
  genero: string;
  descricao: string;
  excluir: (id: string) => void;
}

export const CardDefault = ({
  id,
  titulo,
  autor,
  anoPublicacao,
  dataCadastro,
  genero,
  descricao,
  excluir,
}: CardDefaultProps) => {

  const [activeCard, setActiveCard] = useState(false)
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleFlip = () => {
    setActiveCard(!activeCard)
  }

  const excluirCard = (id: string) =>{
    console.log(id);
    excluir(id)
  }

  const editarCard = (editLivro: Livro) => {
    
    return editLivro
  }

  return (
    <>
    <Grid className="card-container" item xs={6} md={3}>
      <Card className={`card ${activeCard? 'cardFlip':''}`} >

        <CardContent className={`front`} >
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            {autor}
          </Typography>
          <Typography variant="h5" component="div">
            {titulo}
          </Typography>
          <Typography sx={{ mb: 1.5 }}>
            {anoPublicacao}
          </Typography>
          <CardActions>
            <Button onClick={handleFlip} style={{color:"white"}} size="small">Descrição</Button>
            <Button onClick={() => excluirCard(id)}> Excluir </Button>
          </CardActions>
        </CardContent>

        <CardContent className={`back`} style={{backfaceVisibility: activeCard? "hidden" : "visible"}}>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            {genero}
          </Typography>
          <Typography sx={{ mb: 1.5 }} >
            {descricao}
          </Typography>
          <CardActions>
            <Button onClick={handleFlip} style={{color:"white"}} size="small">Voltar</Button>
            {/* <Button onClick={editarCard} style={{color:"white"}} size="small">Editar</Button> */}
          </CardActions>
        </CardContent>
        
      </Card>
    </Grid>

    <Modal open={open} handleClose={handleClose} onSalvarLivro={editarCard} />
    </>
  );
};
