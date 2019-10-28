export default class BookService {
  constructor() {
    this.URI = '/api/books';
  }

  async getBooks() {
    const response = await fetch(this.URI); //string sin formato
    const books = await response.json(); //respuesta con formato
    return books; //retorno los datos recibidos para reutilizarlos en otros lugares del codigo
  }

  async postBook(book) {
    const response = await fetch(this.URI, {
      method: 'post', //No envio una cabecera por no solo voy a enviar datos, sino tambien una imagen
      body: book
    });
    const data = await response.json(); //respuesta del servidor con formato JSON.
    console.log(data);
  }

  async deleteBook(bookId) {
    const response = await fetch(`${this.URI}/${bookId}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    });
    const data = await response.json();
    console.log(data);
  }
}