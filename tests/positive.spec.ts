import { test, expect, request, chromium, Browser } from '@playwright/test';
import { Calculator } from '../models/calculator';

test.describe('Calculator tests', () => {
    let calculator: Calculator;    

    test.beforeAll(async ({browser, browserName}) => {
        let brw: Browser = browser;
        if(browserName == "chromium")
            brw = await chromium.launch({proxy: {server: "http://10.200.200.22:3129"}});
        const page = await brw.newPage();
        calculator = new Calculator(page);
        await calculator.goHome();
    });

    test.beforeEach(async () => {
        await calculator.cleare();
    });

    test('Add calculation test', async () => {
        const result = await calculator.add(120, 130);
        await expect(result).toBe(250);
    });

    test('Dividet calculation test', async () => {
        const result = await calculator.subtract(120, 130);
        await expect(result).toBe(-10);
    });

    test('Multiply calculation test', async () => {
        const result = await calculator.multiply(32.1, 2);
        await expect(result).toBe(64.2);
    });

    test('Divide calculation test', async () => {
        const result = await calculator.divide(32.1, 2);
        await expect(result).toBe(16.05);
    });

    test('Negative calculation test', async () => {
        const result = await calculator.negative(32.1);
        await expect(result).toBe(-32.1);
    });

    test('Root2 calculation test', async () => {
        const result = await calculator.root2(81);
        await expect(result).toBe(9);
    });

    test('Squaring calculation test', async () => {
        const result = await calculator.squaring(9);
        await expect(result).toBe(81);
    });

    test('Cleare display test', async () => {
        await calculator.inputNumber(1785);
        await calculator.cleare()
        await expect(await calculator.displayValue()).toBe('');
    });

    test('Percent calculation test', async () => {
        const result = await calculator.percent(100);
        await expect(result).toBe(1);
    });

    test('R2 calculation test', async () => {
        const result = await calculator.r2(1.226);
        await expect(result).toBe(1.23);
    });

    test('R0 calculation test', async () => {
        const result = await calculator.r0(1.5);
        await expect(result).toBe(2);
    });

    test('Pi calculation test', async () => {
        const result = await calculator.pi();
        await expect(result).toBe(3.1415926536);
    });

    test('Memory calculation test', async () => {
        await calculator.memPlus(100);
        await calculator.cleare();
        await calculator.memMinus(110);
        const result = await calculator.memRecall();
        await expect(result).toBe(-10);
        await calculator.memClear();

        await calculator.memClear();
        const secondResult = await calculator.memRecall();
        await expect(secondResult).toBe(0);
    });
});
