import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '..';
import request, { ERequestStatus } from '../../common/request';

export interface User {
  id: string;
  avatar: string;
  name: string;
  role: string;
}

export interface AuthCredentials {
  login: string;
  password: string;
}

export interface UserState {
  user: User | null;
  fetching: ERequestStatus;
}

const localStoredData = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

const initialState: UserState = {
  user: localStoredData('user'),
  fetching: ERequestStatus.IDLE,
};

export const authUser = createAsyncThunk(
  'user/auth',
  async (credentials: AuthCredentials): Promise<User> => {
    const response = await request.post<string, User>('auth', JSON.stringify(credentials));
    return response;
  },
);

export const logoutUser = createAsyncThunk('user/logout', async (): Promise<boolean> => {
  const response = await request.get<boolean>('logout');
  return response;
});

export const updateUser = createAsyncThunk('user/updateUser', async (user: User) => {
  const { id, ...info } = user;
  const response = await request.put<string, User>(`users/${id}`, JSON.stringify(info));
  return response;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authUser.pending, (_state) => {
        const state = _state;
        state.fetching = ERequestStatus.LOADING;
      })
      .addCase(authUser.fulfilled, (_state, action) => {
        const state = _state;
        state.fetching = ERequestStatus.SUCCEEDED;
        if (action.payload.id) {
          localStorage.setItem('user', JSON.stringify(action.payload));
        }
        state.user = action.payload;
      })
      .addCase(authUser.rejected, (_state) => {
        const state = _state;
        state.fetching = ERequestStatus.FAILED;
      })
      .addCase(logoutUser.rejected, (_state) => {
        const state = _state;
        state.fetching = ERequestStatus.FAILED;
      })
      .addCase(logoutUser.pending, (_state) => {
        const state = _state;
        state.fetching = ERequestStatus.LOADING;
      })
      .addCase(logoutUser.fulfilled, (_state) => {
        const state = _state;
        state.fetching = ERequestStatus.SUCCEEDED;
        state.user = null;
        localStorage.removeItem('user');
      })
      .addCase(updateUser.pending, (_state) => {
        const state = _state;
        state.fetching = ERequestStatus.LOADING;
      })
      .addCase(updateUser.fulfilled, (_state, action) => {
        const state = _state;
        state.fetching = ERequestStatus.SUCCEEDED;
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (_state) => {
        const state = _state;
        state.fetching = ERequestStatus.FAILED;
      });
  },
});

export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
