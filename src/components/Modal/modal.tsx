import React, { useState } from "react";
import { Livro } from "../../service/types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { v4 as createUuid } from "uuid";


interface IsalvarLivro {
  onSalvarLivro: (livro: Livro) => Livro;
  handleClose: () => void;
  open: boolean;
}

export const Modal = ({onSalvarLivro, open, handleClose}:IsalvarLivro) => {
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [anoPublicacao, setAnoPublicacao] = useState('');
  const [dataCadastro, setDataCadastro] = useState('');
  const [genero, setGenero] = useState('');
  const [descricao, setDescricao] = useState('');

  const salvarLivro = () => {
    const newBook: Livro = {
      id: createUuid(),
      titulo,
      autor,
      anoPublicacao,
      dataCadastro,
      genero,
      descricao,
    };
    open = false;
    handleClose();
    onSalvarLivro(newBook)
    handleClear();
    return newBook;
  };

  const handleClear = () => {
    setTitulo("");
    setAutor("");
    setAnoPublicacao("");
    setDataCadastro("");
    setGenero("");
    setDescricao("");
  };

  return (
    <>
    {open &&(
          <Dialog open={true} >
            <DialogTitle>Adicione um Livro Mágico</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="title"
                label="Título"
                type="text"
                fullWidth
                variant="outlined"
                value={titulo}
                onChange={e => setTitulo(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="author"
                label="Autor"
                type="text"
                fullWidth
                variant="outlined"
                value={autor}
                onChange={e => setAutor(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="age"
                label="Ano de publicação"
                type="date"
                fullWidth
                variant="outlined"
                value={anoPublicacao}
                onChange={e => setAnoPublicacao(e.target.value)}
                InputLabelProps={{ shrink: true }}
               inputProps={{ max: `${new Date().toISOString().split("T")[0]}` }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="register"
                label="Data de Cadastro"
                type="date"
                fullWidth
                variant="outlined"
                value={dataCadastro}
                onChange={e => setDataCadastro(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="gender"
                label="Gênero"
                type="text"
                fullWidth
                variant="outlined"
                value={genero}
                onChange={e => setGenero(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="description"
                label="Descrição"
                type="text"
                fullWidth
                variant="outlined"
                value={descricao}
                onChange={e => setDescricao(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button >Cancelar</Button>
              <Button onClick={salvarLivro}>Salvar</Button>
            </DialogActions>
          </Dialog>
          )}
</>
  );
};
