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
  status: ERequestStatus;
}

const initialState: UserState = {
  user: null,
  status: ERequestStatus.IDLE,
};

export const authUser = createAsyncThunk('user/auth', async (credentials: AuthCredentials):Promise<User> => {
    const response = await request.post<string, User>('auth', JSON.stringify(credentials));
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
        state.status = ERequestStatus.LOADING;
      })
      .addCase(authUser.fulfilled, (_state, action) => {
        const state = _state;
        state.status = ERequestStatus.SUCCEEDED;
        state.user = action.payload;
      })
      .addCase(authUser.rejected, (_state) => {
        const state = _state;
        state.status = ERequestStatus.FAILED;
      })
      .addCase(updateUser.pending, (_state) => {
        const state = _state;
        state.status = ERequestStatus.LOADING;
      })
      .addCase(updateUser.fulfilled, (_state, action) => {
        const state = _state;
        state.status = ERequestStatus.SUCCEEDED;
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (_state) => {
        const state = _state;
        state.status = ERequestStatus.FAILED;
      });
  },
});

export const selectUser = (state: RootState) => state.auth.user;
export const selectStatus = (state: RootState) => state.auth.status;

export default authSlice.reducer;
