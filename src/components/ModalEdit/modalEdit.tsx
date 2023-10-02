import React, { useState } from "react";
import { EditLivro } from "../../service/types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

interface IeditarLivro {
  id: string;
  onEditarLivro: (livro: EditLivro) => void;
  handleClose: () => void;
  open: boolean;
}

export const ModalEdit = ({
  onEditarLivro,
  open,
  handleClose,
  id,
}: IeditarLivro) => {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");
  const [descricao, setDescricao] = useState("");

  const editarLivro = () => {
    const newBook = {
      id,
      titulo,
      autor,
      genero,
      descricao,
    };
    open = false;
    handleClose();
    onEditarLivro(newBook);
    handleClear();
    return newBook;
  };

  const handleClear = () => {
    setTitulo("");
    setAutor("");
    setGenero("");
    setDescricao("");
  };

  return (
    <>
      {open && (
        <Dialog open={true}>
          <DialogTitle>Edite o Livro Mágico</DialogTitle>
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
              onChange={(e) => setTitulo(e.target.value)}
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
              onChange={(e) => setAutor(e.target.value)}
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
              onChange={(e) => setGenero(e.target.value)}
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
              onChange={(e) => setDescricao(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={editarLivro}>Editar livro</Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};
