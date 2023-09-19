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
// import Modal from "../components/Modal/modal";
import { CardDefault } from "../components/card";
import moment from "moment";

interface MagicBook {
  id: number;
  title: string;
  author: string;
  age: string;
  register: string;
  gender: string;
  description: string;
}

const Home: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [register, setRegister] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [list, setList] = useState<MagicBook[]>([]);

  const localTime = new Date();
  const maxDate = moment(localTime).format("YYYY-MM-DDTHH:MM:SS");

  const today = new Date();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const newBook: MagicBook = {
      id: Math.random(),
      title,
      author,
      age,
      register,
      gender,
      description,
    };
    setList([...list, newBook]);
    setOpen(false);
    handleClear();
  };

  const handleClear = () => {
    setAge("");
    setAuthor("");
    setDescription("");
    setGender("");
    setRegister("");
    setTitle("");
  };

  return (
    <Grid container>
      <Grid item>
        <Button variant="outlined" onClick={handleClickOpen}>
          Adicionar Livro Mágico
        </Button>
      </Grid>
      <Grid item>
        {list.map((book) => (
          <CardDefault
            anoPublicacao={book.age}
            autor={book.author}
            dataCadastro={book.register}
            descricao={book.description}
            genero={book.gender}
            id={book.id}
            titulo={book.title}
          />
        ))}
      </Grid>

      <Grid container alignItems={"center"}>
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
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="author"
              label="Autor"
              type="text"
              fullWidth
              variant="outlined"
              value={author}
              onChange={(ev) => setAuthor(ev.target.value)}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="age"
              label="Ano de publicação"
              type="datetime-local"
              fullWidth
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              value={age}
              onChange={(ev) => setAge(ev.target.value)}
              required
              inputProps={{
                max: `${maxDate}`,
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="register"
              label="Data de Cadastro"
              type="date"
              fullWidth
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              value={register}
              onChange={(ev) => setRegister(ev.target.value)}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="gender"
              label="Gênero"
              type="text"
              fullWidth
              variant="outlined"
              value={gender}
              onChange={(ev) => setGender(ev.target.value)}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Descrição"
              type="text"
              fullWidth
              variant="outlined"
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={handleSubmit}>Salvar</Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  );
};

export default Home;
