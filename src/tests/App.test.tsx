import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import { store } from '../store/store';

test('1 equal 1', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(1).toEqual(1);
});
