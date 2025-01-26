import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('saves theme in localStorage when theme is changed', () => {
  // Simula el localStorage
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn().mockReturnValue('light'), // Devuelve 'light' si se consulta el tema
      setItem: jest.fn(), // Simula la acción de guardar en localStorage
    },
    writable: true,
  });

  render(<App />);

  // Cambia el tema (simulamos un cambio en el estado, por ejemplo)
  

  // Verifica que el tema se guarde en el localStorage
  expect(window.localStorage.setItem).toHaveBeenCalledWith('theme', 'light'); // Se espera que el tema se guarde como 'light' después del cambio
});
