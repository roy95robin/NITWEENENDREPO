import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { DashboardPage } from '../pages/dashboardPage'
import { CartPage } from '../pages/cartPage'
import { PaymentPage } from '../pages/paymentPage'
import product from '../testdata/product.json'
import payment from '../testdata/payment.json'

const checkoutProduct = product[0]

test.describe('Payment page', () => {
    let lp: LoginPage
    let dp: DashboardPage
    let cp: CartPage
    let pp: PaymentPage

    test.beforeEach(async ({ page }) => {
        lp = new LoginPage(page)
        dp = new DashboardPage(page)
        cp = new CartPage(page)
        pp = new PaymentPage(page)
        await lp.launchUrl(checkoutProduct.url)
        await lp.loginIntoApplication(checkoutProduct.email, checkoutProduct.password)
        await dp.searchAndAddProduct(checkoutProduct.productName, 1)
        await dp.navigateToCart()
        await cp.proceedToCheckout()
    })

    test('creates an order with valid payment details', async () => {
        await pp.completePayment(payment)
        await expect(pp.orderConfirmation).toBeVisible()
    })
})