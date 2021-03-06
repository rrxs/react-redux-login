import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import loginService from '../services/login.service';
import { RootState } from '../app/store';
import history from '../routes/history';

export interface AuthState {
  fullName: string;
  loading: boolean;
}

const initialState: AuthState = {
  fullName: '',
  loading: false,
};

export const loginAsync = createAsyncThunk(
  'auth/loginAsync',
  async ({ username, password }: any) => {
    const response = await loginService.login({ username, password });
    loginService.setJwt(response.data.accessToken);
    history.push('/dashboard');
    return response.data;
  },
);
export const logoutAsync = createAsyncThunk(
  'auth/logoutAsync',
  async (payload: undefined, thunkAPI) => {
    loginService.clearJwt();
    thunkAPI.dispatch(clearState());
    history.push('/login');
    return {};
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearState: (state) => {
      state.fullName = '';
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.fullName = action.payload.fullName;
        state.loading = false;
      });
  },
});

export const { clearState } = authSlice.actions;
export const selectAuthState = (state: RootState) => state.auth;
export default authSlice.reducer;
