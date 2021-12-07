import { useState } from 'react';
import './styles.css';
import { useDispatch } from 'react-redux';
import { registerLib } from '../redux/apiCalls/authApiCalls';
import undrawBooks from '../assets/create.svg';

const RegisterLib = () => {
  const [libroId, setlibroId] = useState('');
  const [nombre, setnombre] = useState('');
  const [categoria, setcategoria] = useState('');
  const [autor, setautor] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("submit");
    // console.log(email);
    // console.log(password);

    registerLib(dispatch, { libroId, nombre, categoria, autor });
  };

  return (
    <main className="form-signin text-center">
      <form onSubmit={handleSubmit} noValidate>
        <img className="imagen" src={undrawBooks} alt="" width="100" />
        <h1 className="h3 mb-3 fw-normal">Regístra un libro</h1>

        <div className="form-floating">
          <input
            type="string"
            className="form-control"
            id="floatingInput"
            placeholder="libroId"
            value={libroId}
            onChange={(e) => setlibroId(e.target.value)}
          />
          <label htmlFor="floatingInput">libroId</label>
        </div>

        <div className="form-floating">
          <input
            type="string"
            className="form-control"
            id="floatingInput"
            placeholder="nombre"
            value={nombre}
            onChange={(e) => setnombre(e.target.value)}
          />
          <label htmlFor="floatingInput">Nombre</label>
        </div>

        <div className="form-floating">
          <input
            type="string"
            className="form-control"
            id="floatingInput"
            placeholder="categoria"
            value={categoria}
            onChange={(e) => setcategoria(e.target.value)}
          />
          <label htmlFor="floatingInput">Categoria</label>
        </div>
        <div className="form-floating">
          <input
            type="string"
            className="form-control"
            id="floatingInput"
            placeholder="autor"
            value={autor}
            onChange={(e) => setautor(e.target.value)}
          />
          <label htmlFor="floatingInput">Autor</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Registrar
        </button>
        <p className="mt-5 mb-3 text-muted">
          Biblioteca proyecto Ciclo 4 &copy; 2021
        </p>
      </form>
    </main>
  );
};

export default RegisterLib;
