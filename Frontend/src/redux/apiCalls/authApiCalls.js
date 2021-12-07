import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
  logoutFailure,
  logoutStart,
  logoutSuccess,
  checkUserStart,
  checkUserSuccess,
  checkUserFailure,
  checkLibroStart,
  checkLibroSuccess,
  checkLibroFailure,
} from '../slices/auth';
import axios from 'axios';

axios.defaults.withCredentials = true;

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      'https://proyectociclo4backend.herokuapp.com/auth/iniciar-sesion',
      user
    );
    console.log(res);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure(error.response.data));
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  console.log('dispatching register');
  try {
    const res = await axios.post(
      'https://proyectociclo4backend.herokuapp.com/auth/registro',
      user
    );
    console.log(res);
    dispatch(registerSuccess(res.data));
  } catch (error) {
    console.log('dispatching register');
    console.log(error.response.data);
    dispatch(registerFailure(error.response.data));
  }
};
export const registerLib = async (dispatch, libro) => {
  dispatch(registerStart());
  console.log('dispatching register');
  try {
    const res = await axios.post(
      'https://proyectociclo4backend.herokuapp.com/auth/registro',
      libro
    );
    console.log(res);
    dispatch(registerSuccess(res.data));
  } catch (error) {
    console.log('dispatching register');
    console.log(error.response.data);
    dispatch(registerFailure(error.response.data));
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutStart());
  try {
    const res = await axios.post(
      'https://proyectociclo4backend.herokuapp.com/auth/cerrar-sesion'
    );
    dispatch(logoutSuccess(res.data));
  } catch (error) {
    console.log(error);
    dispatch(logoutFailure(error.response.data));
  }
};

export const checkUser = async (dispatch) => {
  dispatch(checkUserStart());
  try {
    const res = await axios.get(
      'https://proyectociclo4backend.herokuapp.com/revisar-usuario'
    );
    console.log(res.data.user);
    dispatch(checkUserSuccess(res.data.user));
  } catch (error) {
    dispatch(checkUserFailure(error.response.data));
  }
};

export const checkLibro = async (dispatch) => {
  dispatch(checkLibroStart());
  try {
    const res = await axios.get(
      'https://proyectociclo4backend.herokuapp.com/auth/revisar-libro'
    );
    console.log(res.data.libro);
    dispatch(checkLibroSuccess(res.data.libro));
  } catch (error) {
    dispatch(checkLibroFailure(error.response.data));
  }
};
