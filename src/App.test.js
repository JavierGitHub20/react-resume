import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders learn react link', () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: query === '(prefers-color-scheme: dark)', // Simula "dark mode" si el query coincide
      media: query,
      onchange: null,
      addListener: jest.fn(), // Métodos antiguos
      removeListener: jest.fn(), // Métodos antiguos
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
  
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
 
  expect(linkElement).toBeInTheDocument();
});
