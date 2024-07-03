type AnyFunction = (...args: any[]) => void;

export function throttle<T extends AnyFunction>(func: T, limit: number): T {
  let lastFunc: NodeJS.Timeout;
  let lastRan: number;

  return function(this: any, ...args: Parameters<T>) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  } as T;
}