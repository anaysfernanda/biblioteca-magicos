import React from "react";
import Card from "@mui/material/Card";
import {
  Button,
  CardActions,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import "./estilo.css";

interface CardDefaultProps {
  id: number;
  titulo: string;
  autor: string;
  anoPublicacao: string;
  dataCadastro: string;
  genero: string;
  descricao: string;
}

export const CardDefault = ({
  id,
  titulo,
  autor,
  anoPublicacao,
  dataCadastro,
  genero,
  descricao,
}: CardDefaultProps) => {
  return (
    <Grid className="flip-container" item xs={6} md={3}>
      <Card className="flipper">
        <CardContent className="front">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {autor}
          </Typography>
          <Typography variant="h5" component="div">
            {titulo}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {anoPublicacao}
          </Typography>
          <CardActions>
            <Button size="small">Descrição</Button>
          </CardActions>
        </CardContent>

        <CardContent className="back">
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {descricao}
          </Typography>
          <CardActions>
            <Button size="small">Descrição</Button>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};
