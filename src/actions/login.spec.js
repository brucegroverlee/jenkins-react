import '@babel/polyfill';
import { validEmail } from './login';
/* jest.mock('../api/httpRequests'); */

describe('login::validEmail', () => {
  test('TC#1', () => {
    expect(validEmail('peter@klaven')).toBe(true);
  });

  test('TC#2', () => {
    expect(validEmail('peterklaven')).toBe(false);
  });

  test('TC#3', () => {
    expect(validEmail('')).toBe(false);
  });

  test('TC#4', () => {
    expect(validEmail()).toBe(false);
  });
});