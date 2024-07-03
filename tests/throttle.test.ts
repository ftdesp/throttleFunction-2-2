import { throttle } from '../src/throttle';

jest.useFakeTimers();

describe('throttle', () => {
  it('should execute the function immediately on first call', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);

    throttledFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should not execute the function more than once within the throttle period', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);

    throttledFunc();
    throttledFunc();
    throttledFunc();

    expect(func).toHaveBeenCalledTimes(1);
  });

  it('should execute the function again after the throttle period', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);

    throttledFunc();
    jest.advanceTimersByTime(1000);
    throttledFunc();

    expect(func).toHaveBeenCalledTimes(2);
  });

  it('should pass arguments to the original function', () => {
    const func = jest.fn();
    const throttledFunc = throttle(func, 1000);

    throttledFunc('test', 123);
    expect(func).toHaveBeenCalledWith('test', 123);
  });
});