import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Login from './login';

describe('login page', () => {
  it('should handle initial state', async () => {
    const { getByRole } = render(
      <Provider store={store}>
        <Login />
      </Provider>,
    );

    const btnLogin = getByRole('button', { name: 'Login' });

    expect(btnLogin).toBeInTheDocument();
  });
});
