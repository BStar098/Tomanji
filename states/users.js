import { createReducer, createAction } from "@reduxjs/toolkit";

const initialUsersState = {
  currentUser: {},
  userList: [],
  usersHistory: [],
};

const createUser = createAction("CREATE_USER");

const deleteUser = createAction("DELETE_USER");

const editUser = createAction("EDIT_USER");

const setUser = createAction("SET_USER");

const createUsersList = createAction("CREATE_USERS_LIST");

const usersReducer = createReducer(initialUsersState, {
  [createUser]: (state, action) => {
    state.userList = [...state.userList, action.payload];
  },
  [deleteUser]: (state, action) => {
    state.userList = state.userList.filter(
      (el) => el.name !== action.payload.name
    );
  },
  [editUser]: (state, action) => {
    state.userList = state.userList.filter(
      (el) => el.name !== action.payload.name
    );
    state.userList = [...state.userList, action.payload];
  },
  [setUser]: (state, action) => {
    state.currentUser = action.payload;
  },
  [createUsersList]: (state, action) => {
    state.usersHistory = [...state.usersHistory, action.payload];
  },
});
