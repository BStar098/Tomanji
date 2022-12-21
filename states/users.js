import { createReducer, createAction } from "@reduxjs/toolkit";
import { Alert } from "react-native";

const initialUsersState = {
  editable: false,
  currentUser: {},
  currentUserList: [],
  userList: [],
  usersHistory: [],
};

export const createUser = createAction("CREATE_USER");

export const deleteUser = createAction("DELETE_USER");

export const editUser = createAction("EDIT_USER");

export const createUsersList = createAction("CREATE_USERS_LIST");

export const setCurrentUserList = createAction("SET_CURRENT_USER_LIST");

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
  [editUser]: (state, action) => {
    state.userList = state.userList.filter(
      (el) => el.name !== action.payload.name
    );
    state.userList = [...state.userList, action.payload];
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
