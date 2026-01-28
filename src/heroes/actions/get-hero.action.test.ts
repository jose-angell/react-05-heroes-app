import { describe, expect, test } from "vitest";
import { getHeroAction } from "./get-hero.action";


describe('getHeroAction', () => {
    test('should fetch hero data and return with complete image url', async () => {
        const result = await getHeroAction('clark-kent');
        expect(result).toBeDefined();
        expect(result.name).toBe('Clark Kent');
        expect(result.image).toContain('http');
    });
    test('should throw an error if hero is not found', async () => {
        const idSlug = 'batman-2';
        const result = await getHeroAction(idSlug).catch((error) => {
            expect(error).toBeDefined();
            expect(error.response.status).toBe(404);
            expect(error.message).toBe(`Request failed with status code 404`);
        });
        expect(result).toBeUndefined();
    });
});