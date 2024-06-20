// stringLength.test.ts

import { index } from './index';

describe('stringLength', () => {
    it('should return 0 for an empty string', () => {
        expect(index("")).toBe(0);
    });

    it('should return the correct length for a non-empty string', () => {
        expect(index("hello")).toBe(5);
    });

    it('should handle strings with spaces correctly', () => {
        expect(index("hello world")).toBe(11);
    });

    it('should handle strings with special characters correctly', () => {
        expect(index("¡Hola!")).toBe(6);
    });
});
