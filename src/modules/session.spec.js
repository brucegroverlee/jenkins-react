import '@babel/polyfill';
import * as session from './session';

describe('Test session::set', () => {
  test('TC#1', () => {
    expect(session.set('peter@klaven', 'mytoken')).toBe(true);
  });

  test('TC#3', () => {
    expect(session.set('', 'mytoken')).toBe(false);
  });

  test('TC#4', () => {
    expect(session.set(undefined, 'mytoken')).toBe(false);
  });

  test('TC#5', () => {
    expect(session.set('peterklaven', '')).toBe(false);
  });

  test('TC#6', () => {
    expect(session.set('peterklaven', undefined)).toBe(false);
  });
});

describe('Test session::clean', () => {
  test('TC#7', () => {
    const spy = jest.spyOn(Storage.prototype, 'removeItem');
    session.clean();
    expect(spy).toBeCalled();
    spy.mockRestore();
  });
});