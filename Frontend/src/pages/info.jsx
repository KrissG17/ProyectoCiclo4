/* eslint-disable jsx-a11y/alt-text */
import undrawBooks from '../assets/piclibrary.jpg';
import './styles.css';
const Informacion = () => {
  return (
    <div>
      <div className="blog-detail-ct">
        <br />
        <h1>Información del Proyecto</h1>
        <span className="time">6 Diciembre 2021</span>

        <h2>Biblioteca Personal</h2>
        <p>
          Se presenta la idea de un gestor de biblioteca personal donde se tiene
          almacenado los libros que la persona posee, ya sea en físico o en
          digital, mediante la aplicación se puede almacenar, editar, borrar
          libros en una base de datos para ser consultados según el usuario lo
          requiera,también cuenta con un sitema de notas donde puede añadir en
          qué pagina de la lectura se encuentra, notas importantes sobre la
          lectura, un estado que puede ser:
          <br /> -Sin Iniciar <br />
          -Leyendo
          <br /> -Finalizado <br />
        </p>
        <h2>Funcionalidades</h2>
        <p>
          - Sistema de log-in con registro para nuevos usuarios con validación
          al acceder. <br />- Creación de cookies para la validación y
          permanencia en el aplicativo. <br />- Creación, edición y eliminación
          de libros con sus características principales como: nombre, categoría,
          autor y un libro_id. <br />- Creación, edición y eliminación de notas
          <br />
          - Sistema de estado de lectura: sin iniciar, leyendo, finalizado.
          <br />
        </p>
        <h2>Futuras funcionalidades</h2>
        <p>
          - Aceditación de usuario administrador que posea acceso a la
          edición/creación/eliminación de la base de datos del los libros.
          <br />- Acreditacion de usuario noAdministrador que sólo tenga acceso
          a vista de libros y notas.
          <br />
          - Pulir funcinalidades de creación/edición/eliminación de libros y
          notas.
          <br />
          - Agregar estados a los libros ya sea como "prestado","perdido", etc.
          <br />- Añadir en el modelo de libro una nueva variable tipo Date para
          añadir fechas tanto de adquisición, inicio de lectura, finalización.
          <br />- Crear un sistema de historial de modificacion de notas.
        </p>
        <img className="img-fluid" src={undrawBooks} />
      </div>
    </div>
  );
};

export default Informacion;
