// ── External Dependencies & Registrations
import { describe, expect, it } from 'vitest';

// ── Local
import { generateMathML } from '@/formula';

// ── Tests ────────────────────────────────────────────────────────────────────────────────────────────────────────────

describe('generateMathML', () => {
    it('renders a lone number', () => {
        expect(generateMathML('5')).toBe(wrapMath('<mn>5</mn>'));
    });

    it('renders a decimal number', () => {
        expect(generateMathML('3.14')).toBe(wrapMath('<mn>3.14</mn>'));
    });

    it('renders a lone identifier', () => {
        expect(generateMathML('A')).toBe(wrapMath('<mi>A</mi>'));
    });

    it('renders addition', () => {
        expect(generateMathML('A+B')).toBe(wrapMath('<mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow>'));
    });

    it('renders subtraction', () => {
        expect(generateMathML('A-B')).toBe(wrapMath('<mrow><mi>A</mi><mo>-</mo><mi>B</mi></mrow>'));
    });

    it('renders multiplication using a times sign', () => {
        expect(generateMathML('A*B')).toBe(wrapMath('<mrow><mi>A</mi><mo>×</mo><mi>B</mi></mrow>'));
    });

    it('renders division as a fraction', () => {
        expect(generateMathML('A/B')).toBe(wrapMath('<mfrac><mi>A</mi><mi>B</mi></mfrac>'));
    });

    it('renders assignment', () => {
        expect(generateMathML('A=B')).toBe(wrapMath('<mrow><mi>A</mi><mo>=</mo><mi>B</mi></mrow>'));
    });

    it('renders parenthesized groups', () => {
        expect(generateMathML('(A+B)')).toBe(wrapMath('<mrow><mo>(</mo><mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow><mo>)</mo></mrow>'));
    });

    it('gives multiplication and division higher precedence than addition and subtraction', () => {
        expect(generateMathML('A+B*C')).toBe(wrapMath('<mrow><mi>A</mi><mo>+</mo><mrow><mi>B</mi><mo>×</mo><mi>C</mi></mrow></mrow>'));
    });

    it('respects explicit parentheses over default precedence', () => {
        expect(generateMathML('(A+B)*C')).toBe(wrapMath('<mrow><mrow><mo>(</mo><mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow><mo>)</mo></mrow><mo>×</mo><mi>C</mi></mrow>'));
    });

    it('left-associates a chain of same-precedence operators', () => {
        expect(generateMathML('A-B-C')).toBe(wrapMath('<mrow><mrow><mi>A</mi><mo>-</mo><mi>B</mi></mrow><mo>-</mo><mi>C</mi></mrow>'));
    });

    it('right-associates chained assignment', () => {
        expect(generateMathML('A=B=C')).toBe(wrapMath('<mrow><mi>A</mi><mo>=</mo><mrow><mi>B</mi><mo>=</mo><mi>C</mi></mrow></mrow>'));
    });

    it('drops characters outside the supported token set, such as underscores', () => {
        expect(generateMathML('A_')).toBe(wrapMath('<mi>A</mi>'));
    });

    it('throws when dropping an unsupported character merges two operands together', () => {
        // "A_B" tokenizes to ["A", "B"] once the underscore is dropped, i.e. two operands with no operator.
        expect(() => generateMathML('A_B')).toThrow(/Invalid formula/);
    });

    it('renders an empty expression as empty math rather than throwing', () => {
        expect(generateMathML('')).toBe('<math></math>');
    });

    it('renders a whitespace-only expression as empty math rather than throwing', () => {
        expect(generateMathML(' '.repeat(3))).toBe('<math></math>');
    });

    it('throws on an unclosed parenthesis', () => {
        expect(() => generateMathML('(A+B')).toThrow(/Invalid formula/);
    });

    it('throws on an unopened closing parenthesis', () => {
        expect(() => generateMathML('A+B)')).toThrow(/Invalid formula/);
    });

    it('throws on a dangling trailing operator', () => {
        expect(() => generateMathML('A+')).toThrow(/Invalid formula/);
    });

    it('throws on a dangling trailing assignment', () => {
        expect(() => generateMathML('A=')).toThrow(/Invalid formula/);
    });

    it('merges a letter run separated by spaces into a single multi-word identifier', () => {
        // The tokenizer's identifier pattern allows internal spaces, so "A B" is one token, not two operands.
        expect(generateMathML('A B')).toBe(wrapMath('<mi>A B</mi>'));
    });

    it('throws on two numbers with no operator between them', () => {
        expect(() => generateMathML('2 3')).toThrow(/Invalid formula/);
    });

    it('throws on a formula that is only an operator', () => {
        expect(() => generateMathML('*')).toThrow(/Invalid formula/);
    });

    it('throws on unary minus, which is not supported', () => {
        expect(() => generateMathML('-5')).toThrow(/Invalid formula/);
    });

    it('is case-insensitive for identifiers', () => {
        expect(generateMathML('a+b')).toBe(wrapMath('<mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow>'));
    });
});

// ── Helpers ──────────────────────────────────────────────────────────────────────────────────────────────────────────

// Rendered formulas sit in a container that scrolls sideways, so a long formula never widens the page.
function wrapMath(content: string): string {
    return `<div class="overscroll-x-none overflow-x-auto pb-4"><math>${content}</math></div>`;
}
