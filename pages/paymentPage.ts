import { Locator, Page } from "@playwright/test";

export class PaymentPage {
    page: Page
    placeOrderButton: Locator
    orderConfirmation: Locator

    constructor(page: Page) {
        this.page = page
        this.placeOrderButton = this.page.getByText('Place Order', { exact: true })
        this.orderConfirmation = this.page.getByText(/thankyou for the order/i)
    }

    async completePayment(paymentData: {
        nameOnCard: string
        cardNumber: string
        expiryMonth: string
        expiryYear: string
        cvv: string
        country: string
    }) {
        await this.page.getByText('Credit Card Number', { exact: true }).locator('..').locator('input').fill(paymentData.cardNumber)
        await this.page.getByRole('combobox').nth(0).selectOption(paymentData.expiryMonth)
        await this.page.getByRole('combobox').nth(1).selectOption(paymentData.expiryYear)
        await this.page.getByText('CVV Code ?', { exact: true }).locator('..').locator('input').fill(paymentData.cvv)
        await this.page.getByText('Name on Card', { exact: true }).locator('..').locator('input').fill(paymentData.nameOnCard)
        const country = this.page.locator('input[placeholder="Select Country"]')
        await country.fill('')
        await country.pressSequentially(paymentData.country, { delay: 50 })
        await this.page.getByText(paymentData.country, { exact: true }).last().click()
        await this.page.locator('.ta-backdrop').waitFor({ state: 'hidden' })
        await this.placeOrder()
    }

    async placeOrder() {
        await this.placeOrderButton.click()
    }
}