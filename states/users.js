import { createReducer, createAction } from "@reduxjs/toolkit";

const initialUsersState = {
  currentUser: {},
  userList: [],
  usersHistory: [],
};

export const createUser = createAction("CREATE_USER");

export const deleteUser = createAction("DELETE_USER");

export const editUser = createAction("EDIT_USER");

export const setUser = createAction("SET_USER");

export const createUsersList = createAction("CREATE_USERS_LIST");

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
  [setUser]: (state, action) => {
    state.currentUser = action.payload;
  },
  [createUsersList]: (state, action) => {
    state.usersHistory = [...state.usersHistory, action.payload];
  },
  [clearUserList]: (state, action) => {
    state.userList = [];
  },
});

export default usersReducer;
