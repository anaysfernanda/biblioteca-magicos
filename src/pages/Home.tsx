import { Button, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CardDefault } from "../components/card";
import { Modal } from "../components/Modal/modal";
import { EditLivro, Livro } from "../service/types";
import image from "../assets/images/livro.jpg";
import { Wrap } from "../components/wrap";
import { ButtonStyle } from "../components/Button";
import { ModalEdit } from "../components/ModalEdit/modalEdit";

const Home: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [list, setList] = useState<Livro[]>([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (newBook: Livro) => {
    setList([...list, newBook]);

    return newBook;
  };

  const handleDelete = (idDeletado: string) => {
    const updateList = list.filter((card) => card.id !== idDeletado);
    setList(updateList);
  };

  const editarCard = (editLivro: EditLivro) => {
    const updatedBookList = list.map((livro) => {
      console.log(`id de cada livro ${livro.id}`);
      return livro.id === editLivro.id ? { ...livro, ...editLivro } : livro;
    });
    setList(updatedBookList);
  };

  return (
    <>
      <Wrap imageUrl={image} />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <ButtonStyle onclick={handleClickOpen} texto="Adicione um Livro" />
          {/* Adicionar Livro Mágico
        </Button> */}
        </Grid>
      </Grid>

      <Grid container m={2}>
        {list.map((book) => (
          <CardDefault
            anoPublicacao={book.anoPublicacao}
            autor={book.autor}
            dataCadastro={book.dataCadastro}
            descricao={book.descricao}
            genero={book.genero}
            id={book.id}
            titulo={book.titulo}
            excluir={handleDelete}
            editar={editarCard}
          />
        ))}
      </Grid>

      <Modal
        open={open}
        handleClose={handleClose}
        onSalvarLivro={handleSubmit}
      />
    </>
  );
};

export default Home;
