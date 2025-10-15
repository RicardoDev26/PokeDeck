export const loadAsync = jest.fn(() => Promise.resolve());
export const isLoaded = jest.fn(() => true);
export default {
  loadAsync: jest.fn(() => Promise.resolve()),
  isLoaded: jest.fn(() => true), // Esto es clave para evitar el error
};