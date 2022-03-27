import { test, expect, Page, Locator } from '@playwright/test';

const pageUrl = "https://www.theonlinecalculator.com/";

export class Calculator {
    private buttonZero: Locator;
    private buttonOne: Locator;
    private buttonTwo: Locator;
    private buttonThree: Locator;
    private buttonFour: Locator;
    private buttonFive: Locator;
    private buttonSix: Locator;
    private buttonSeven: Locator;
    private buttonEight: Locator;
    private buttonNine: Locator;

    private buttonAdd: Locator;
    private buttonSubtract: Locator;
    private buttonMultiply: Locator;
    private buttonDivide: Locator;
    private buttonCalculate: Locator;
    private buttonDecimal: Locator;
    private buttonNegate: Locator;
    private buttonRoot2: Locator;
    private buttonSquaring: Locator;
    private buttonCleare: Locator;
    private buttonPercent: Locator;
    private buttonR2: Locator;
    private buttonR0: Locator;
    private buttonPi: Locator;

    private buttonMP: Locator;
    private buttonMM: Locator;
    private buttonMR: Locator;
    private buttonMC: Locator;

    private displayElement: Locator;

    constructor(private page: Page) {
        this.buttonZero = this.page.locator("//input[@name='zero' and contains(@class, 'number')]");
        this.buttonOne = this.page.locator("//input[@name='one']");
        this.buttonTwo = this.page.locator("//input[@name='two']");
        this.buttonThree = this.page.locator("//input[@name='three']");
        this.buttonFour = this.page.locator("//input[@name='four']");
        this.buttonFive = this.page.locator("//input[@name='five']");
        this.buttonSix = this.page.locator("//input[@name='six']");
        this.buttonSeven = this.page.locator("//input[@name='seven']");
        this.buttonEight = this.page.locator("//input[@name='eight']");
        this.buttonNine = this.page.locator("//input[@name='nine']");

        this.buttonAdd = this.page.locator("//input[@name='add']");
        this.buttonSubtract = this.page.locator("//input[@name='subtract']");
        this.buttonMultiply = this.page.locator("//input[@name='multiply']");
        this.buttonDivide = this.page.locator("//input[@name='divide']");
        this.buttonCalculate = this.page.locator("//input[@name='calculate']");
        this.buttonDecimal = this.page.locator("//input[@name='decimal' and contains(@class, 'number')]");
        this.buttonNegate = this.page.locator("//input[@name='negateButton' and contains(@class, 'number')]");
        this.buttonRoot2 = this.page.locator("//input[@name='root2']");
        this.buttonSquaring = this.page.locator("//input[@value='x²']");
        this.buttonCleare = this.page.locator("//input[@name='clearButton']")
        this.buttonPercent = this.page.locator("//input[@name='percentButton']")
        this.buttonR2 = this.page.locator("//input[@value='R2']")
        this.buttonR0 = this.page.locator("//input[@value='R0']")
        this.buttonPi = this.page.locator("//input[@value='π']")

        this.buttonMP = this.page.locator("//input[@name='memory_plusButton']")
        this.buttonMM = this.page.locator("//input[@name='memory_minusButton']")
        this.buttonMR = this.page.locator("//input[@name='memory_recallButton']")
        this.buttonMC = this.page.locator("//input[@name='memory_clearButton']")

        this.displayElement = this.page.locator("//input[@name='display']");
    }
    async inputNumber(number: Number) {
        for (let n of number.toString()) {
            switch (n) {
                case "0":
                    await this.buttonZero.click();
                    break;
                case "1":
                    await this.buttonOne.click();
                    break;
                case "2":
                    await this.buttonTwo.click();
                    break;
                case "3":
                    await this.buttonThree.click();
                    break;
                case "4":
                    await this.buttonFour.click();
                    break;
                case "5":
                    await this.buttonFive.click();
                    break;
                case "6":
                    await this.buttonSix.click();
                    break;
                case "7":
                    await this.buttonSeven.click();
                    break;
                case "8":
                    await this.buttonEight.click();
                    break;
                case "9":
                    await this.buttonNine.click();
                    break;
                case ".":
                    await this.buttonDecimal.click();
                    break;
            }
        }
    }
    async goHome() {
        await this.page.goto(pageUrl);
    }
    async add(a: number, b: number): Promise<number> {
        await this.inputNumber(a);
        await this.buttonAdd.click();
        await this.inputNumber(b);
        await this.buttonCalculate.click();

        return Number(await this.displayElement.inputValue());
    }
    async subtract(a: number, b: number): Promise<number> {
        await this.inputNumber(a);
        await this.buttonSubtract.click();
        await this.inputNumber(b);
        await this.buttonCalculate.click();

        return Number(await this.displayElement.inputValue());
    }
    async multiply(a: number, b: number): Promise<number> {
        await this.inputNumber(a);
        await this.buttonMultiply.click();
        await this.inputNumber(b);
        await this.buttonCalculate.click();

        return Number(await this.displayElement.inputValue());
    }
    async divide(a: number, b: number): Promise<number> {
        await this.inputNumber(a);
        await this.buttonDivide.click();
        await this.inputNumber(b);
        await this.buttonCalculate.click();

        return Number(await this.displayElement.inputValue());
    }
    async negative(a: number): Promise<number> {
        await this.inputNumber(a);
        await this.buttonNegate.click();

        return Number(await this.displayElement.inputValue());
    }
    async root2(a: number): Promise<number> {
        await this.inputNumber(a);
        await this.buttonRoot2.click();

        return Number(await this.displayElement.inputValue());
    }
    async squaring(a: number): Promise<number> {
        await this.inputNumber(a);
        await this.buttonSquaring.click();

        return Number(await this.displayElement.inputValue());
    }
    async cleare() {
        await this.buttonCleare.click();
    }
    async displayValue(): Promise<string> {
        return await this.displayElement.inputValue()
    }
    async percent(a: number): Promise<number> {
        await this.inputNumber(a);
        await this.buttonPercent.click();

        return Number(await this.displayElement.inputValue());
    }
    async r2(a: number): Promise<number> {
        await this.inputNumber(a);
        await this.buttonR2.click();

        return Number(await this.displayElement.inputValue());
    }
    async r0(a: number): Promise<number> {
        await this.inputNumber(a);
        await this.buttonR0.click();

        return Number(await this.displayElement.inputValue());
    }
    async pi(): Promise<number> {
        await this.buttonPi.click();

        return Number(await this.displayElement.inputValue());
    }
    async memPlus(a: number) {
        await this.inputNumber(a);
        await this.buttonMP.click();
    }
    async memMinus(a: number) {
        await this.inputNumber(a);
        await this.buttonMM.click();
    }
    async memRecall(): Promise<number> {
        await this.buttonMR.click();
        return Number(await this.displayValue());
    }
    async memClear() {
        await this.buttonMC.click();
    }
}