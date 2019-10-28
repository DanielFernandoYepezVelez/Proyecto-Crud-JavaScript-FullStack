/* Esto se puede por que estoy trabajando con WEBPACK IMPORTAR LAS CLASES DE OTROS ARCHIVOS Y LOS MODULOS*/

/* El css en javascript */
require('./styles/styles.css');
import UI from './UI';
import { isUndefined } from 'util';

/* Una vez cargue la interfaz traigo la data desde el backend */
document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI;
  ui.renderBook();
});

/* Obtener la data del Formulario */
document.getElementById('book-form')
  .addEventListener('submit', eventoObjeto => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const image = document.getElementById('image').files;

    /* Agrupando la data en un solo lugar */
    const formData = new FormData();
    formData.append('image', image[0]);
    formData.append('title', title);
    formData.append('author', author);
    formData.append('isbn', isbn);

    const ui = new UI();
    const data = ui.addNewBook(formData);
    ui.renderMessage('New Book Added', 'success', 3000);
    console.log(data);

    eventoObjeto.preventDefault();
  });

document.getElementById('books-cards')
  .addEventListener('click', evento => {
    if(evento.target.classList.contains('delete')){
      const ui = new UI();
      ui.deleteBook(evento.target.getAttribute('_id'));
      ui.renderMessage('Book Removed', 'danger', 3000);
    }
    evento.preventDefault();
  });