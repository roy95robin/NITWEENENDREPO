import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { DashboardPage } from '../pages/dashboardPage'
import { CartPage } from '../pages/cartPage'
import product from '../testdata/product.json'

const cartProduct = product[0]

test.describe('Cart page', () => {
    let lp: LoginPage
    let dp: DashboardPage
    let cp: CartPage

    test.beforeEach(async ({ page }) => {
        lp = new LoginPage(page)
        dp = new DashboardPage(page)
        cp = new CartPage(page)
        await lp.launchUrl(cartProduct.url)
        await lp.loginIntoApplication(cartProduct.email, cartProduct.password)
        await dp.searchAndAddProduct(cartProduct.productName, 1)
        await expect(dp.addToCartMessage).toContainText(cartProduct.sucessMessage.trim())
        await dp.navigateToCart()
    })

    test('opens checkout for the added product', async ({ page }) => {
        await expect(cp.cartPageIdentifier).toBeVisible()
        await expect(cp.checkoutButton).toBeVisible()
        await cp.proceedToCheckout()
        await expect(page).toHaveURL(/client\/#\/dashboard\/order/)
    })
})