import { createReducer, createAction } from "@reduxjs/toolkit";
import { Alert } from "react-native";

const initialUsersState = {
  editable: false,
  currentUser: "",
  currentUserList: [],
  userList: [],
  usersHistory: [],
};

//Al no haber implementado una api rest, tuve que crear acciones extras para que todo funcione correctamente, así que si algúna acción no está comentada es porque en la aplicación con api rest, tal acción no sería necesaria. También cabe destacar que si bien todas estás accione son sincrónicas, si hubiese implementado una api rest, debería haber usado createAsyncThunk para los pedidos asincrónicos.

export const createUser = createAction("CREATE_USER"); //POST, se crea un usuario con id único

export const deleteUser = createAction("DELETE_USER"); //DELETE, se elimina un usuario a partir de su id

export const setUser = createAction("SET_USER");

export const editUser = createAction("EDIT_USER"); //PUT, se edita un usuario a partir de su id

export const createUsersList = createAction("CREATE_USERS_LIST"); //POST, se crea un evento y se lo vincula con aquellos usuarios que aun no tengan un eventoId

export const setCurrentUserList = createAction("SET_CURRENT_USER_LIST"); //GET, se trae a todos los usuarios que tengan cierto eventoId

export const setEditableTrue = createAction("SET_EDITABLE_TRUE");

export const editUserList = createAction("EDIT_USER_LIST");

export const setUserList = createAction("SET_USER_LIST");

export const clearUserList = createAction("CLEAR_USER_LIST");

const usersReducer = createReducer(initialUsersState, {
  [createUser]: (state, action) => {
    state.userList = [...state.userList, action.payload];
  },
  [deleteUser]: (state, action) => {
    state.userList = state.userList.filter((el) => el !== action.payload);
  },
  [setUser]: (state, action) => {
    state.currentUser = action.payload;
  },
  [editUser]: (state, action) => {
    const indexToReplace = state.userList.findIndex(
      (user) => user === state.currentUser
    );
    state.userList[indexToReplace] = action.payload;
  },
  [createUsersList]: (state, action) => {
    state.usersHistory = [...state.usersHistory, action.payload];
    Alert.alert("Crear Evento", "Evento creado con éxito!");
  },
  [setCurrentUserList]: (state, action) => {
    state.userList = action.payload;
  },
  [setUserList]: (state, action) => {
    state.currentUserList = state.usersHistory.find(
      (history) => history.name === action.payload
    );
  },
  [clearUserList]: (state, action) => {
    state.userList = [];
  },
  [setEditableTrue]: (state, action) => {
    state.editable = action.payload;
  },
  [editUserList]: (state, action) => {
    const indexToReplace = state.usersHistory.findIndex(
      (history) => history.name === action.payload.name
    );
    state.usersHistory[indexToReplace].players = action.payload.players;
    Alert.alert("Editar lista", "Lista editada con éxito!");
  },
});

export default usersReducer;
