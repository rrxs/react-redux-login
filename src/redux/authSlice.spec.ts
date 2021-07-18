import { loginAsync, logoutAsync } from './authSlice';
import { store } from '../app/store';

describe('auth reducer', () => {
  it('should handle initial state', async () => {
    const state = store.getState().auth;
    expect(state.fullName).toBe('');
  });
  it('should handle login and logout successfully', async () => {
    await store.dispatch(loginAsync({ username: '', password: '' }));
    let state = store.getState().auth;
    expect(state.fullName).toBe('Logged User');

    await store.dispatch(logoutAsync());
    state = store.getState().auth;
    expect(state.fullName).toBe('');
  });
});
// to be continued...
