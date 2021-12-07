import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../redux/apiCalls/authApiCalls';
import undrawBooks from '../assets/bookIcon.svg';

const NavBar = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const cerrarSesion = () => {
    logout(dispatch);
  };

  console.log(currentUser);
  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={undrawBooks}
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-bottom"
          />
          Biblioteca
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/registroLibro">
                RegistrarLibro
              </NavLink>
            </li>
            {!currentUser ? (
              <React.Fragment>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/inicio-sesion"
                  >
                    Iniciar Sesión
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/registro">
                    Registro
                  </NavLink>
                </li>
              </React.Fragment>
            ) : null}
            <li className="nav-item">
              <NavLink className="nav-link" to="/info">
                Información
              </NavLink>
            </li>
          </ul>
        </div>
        {currentUser ? (
          <div className="d-flex align-items-center">
            <div className="dropdown text-end mx-2 show">
              <a
                href="/"
                className="d-block link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span
                  width="25"
                  height="25"
                  className="rounded-circle border border-secondary p-2 text-dark text-uppercase"
                >
                  {currentUser.email.substring(0, 2)}
                </span>
              </a>
              <ul
                className="dropdown-menu text-small dropdown-menu-primary "
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <p className="dropdown-item" href="/">
                    {currentUser.email}
                  </p>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button
                    onClick={() => {
                      logout(dispatch);
                    }}
                    className="dropdown-item"
                  >
                    Cerrar sesión
                  </button>
                </li>
              </ul>
            </div>
            <button className="btn btn-outline-primary" onClick={cerrarSesion}>
              Cerrar Sesión
            </button>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default NavBar;
