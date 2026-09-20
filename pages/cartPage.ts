import { Locator, Page } from "@playwright/test";

export class CartPage {
    page: Page
    checkoutButton: Locator
    cartPageIdentifier: Locator

    constructor(page: Page) {
        this.page = page
        this.checkoutButton = this.page.getByRole('button', { name: /checkout/i })
        this.cartPageIdentifier = this.page.locator('.cartSection').first()
    }

    async proceedToCheckout() {
        await this.checkoutButton.click()
    }
}