import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

// interface ModalProps {
//   handleClose: () => void;
//   open: boolean;
// }

export const Modal = ({onSalvarLivro}) => {

  const [id, setId] = useState('')
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [anoPublicacao, setAnoPublicacao] = useState('');
  const [dataCadastro, setDataCadastro] = useState('');
  const [genero, setGenero] = useState('');
  const [descricao, setDescricao] = useState('');

  const salvarLivro(){
    const data = {
      id,
      titulo,
      autor,
      anoPublicacao,
      dataCadastro,
      genero,
      descricao
    }
    onSalvarLivro(data);
}

  return (
    <>
    {/*<><Grid container alignItems={"center"}> */}
          <Dialog open={open} onClose={handleClose}>
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
                onchange={e => setAnoPublicacao(e.target.value)}
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
                onchange={e => setDataCadastro(e.target.value)}
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
                onchange={e => setGenero(e.target.value)}
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
                onchange={e => setDescricao(e.target.value)}

              />
            </DialogContent>
            <DialogActions>
              <Button onClick={}>Cancelar</Button>
              <Button onClick={salvarLivro}>Salvar</Button>
            </DialogActions>
          </Dialog>
        {/* </Grid> */}
</>
  );
};
