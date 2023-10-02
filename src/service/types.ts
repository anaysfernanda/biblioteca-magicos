export interface Livro {
  id: string;
  titulo: string;
  autor: string;
  anoPublicacao: string;
  dataCadastro: string;
  genero: string;
  descricao: string;
}

export interface EditLivro {
  id: string;
  titulo: string;
  autor: string;
  genero: string;
  descricao: string;
}
