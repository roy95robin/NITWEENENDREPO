# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cartPageTest.spec.ts >> Cart page >> shows the added product in the cart
- Location: tests\cartPageTest.spec.ts:26:9

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.cartSection').first() to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e11] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [aria-hidden] [ref=e24]: 
          - text: Sign Out
  - generic [ref=e25]:
    - generic [ref=e26]:
      - heading "My Cart" [level=1] [ref=e27]
      - button "Continue Shopping❯" [ref=e28] [cursor=pointer]
    - heading "No Products in Your Cart !" [level=1] [ref=e30]
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | 
  3  | export class CartPage {
  4  |     page: Page
  5  |     cartItems: Locator
  6  |     productNames: Locator
  7  |     productPrices: Locator
  8  |     deleteButtons: Locator
  9  |     checkoutButton: Locator
  10 |     emptyCartMessage: Locator
  11 | 
  12 |     constructor(page: Page) {
  13 |         this.page = page
  14 |         this.cartItems = this.page.locator('.cartSection')
  15 |         this.productNames = this.page.locator('.cartSection h3')
  16 |         this.productPrices = this.page.locator('.cartSection .prodTotal p')
  17 |         this.deleteButtons = this.page.locator('.cartSection button')
  18 |         this.checkoutButton = this.page.getByRole('button', { name: /checkout/i })
  19 |         this.emptyCartMessage = this.page.getByText(/your cart is empty|no products in the cart/i)
  20 |     }
  21 | 
  22 |     async verifyCartPage() {
> 23 |         await this.cartItems.first().waitFor()
     |                                      ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  24 |     }
  25 | 
  26 |     async removeProduct(productName: string) {
  27 |         const item = this.cartItems.filter({ hasText: productName })
  28 |         await item.locator('button').click()
  29 |     }
  30 | 
  31 |     async proceedToCheckout() {
  32 |         await this.checkoutButton.click()
  33 |     }
  34 | }
```