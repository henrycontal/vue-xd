import { describe, expect, it } from 'vitest';

describe('Example Component', () => {
    it('Should be greater than 10', () => {
        let value = 5;

        value += 10;

        expect(value).toBeGreaterThan(10);
    });
});
