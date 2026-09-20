# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: paymentPageTest.spec.ts >> Payment page >> creates an order with valid payment details
- Location: tests\paymentPageTest.spec.ts:29:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /place order/i })

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
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [aria-hidden] [ref=e25]: 
          - text: Sign Out
  - generic [ref=e28]:
    - generic [ref=e32]:
      - generic [ref=e33]: ADIDAS ORIGINAL
      - generic [ref=e34]: $ 11500
      - generic [ref=e35]: "Quantity: 1"
      - list [ref=e37]:
        - listitem [ref=e38]: Apple phone
    - generic [ref=e41]:
      - generic [ref=e42]: Payment Method
      - generic [ref=e43]:
        - generic [ref=e44] [cursor=pointer]: Credit Card
        - generic [ref=e45] [cursor=pointer]: Paypal
        - generic [ref=e46] [cursor=pointer]: SEPA
        - generic [ref=e47] [cursor=pointer]: Invoice
      - generic [ref=e48]:
        - generic [ref=e49]:
          - generic [ref=e50]: Personal Information
          - generic [ref=e52]:
            - generic [ref=e54]:
              - generic [ref=e55]: Credit Card Number
              - textbox [ref=e56]: "4111111111111111"
            - generic [ref=e57]:
              - generic [ref=e58]:
                - generic [ref=e59]: Expiry Date
                - combobox [ref=e60]:
                  - option "01"
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12" [selected]
                - combobox [ref=e61]:
                  - option "01"
                  - option "02"
                  - option "03"
                  - option "04"
                  - option "05"
                  - option "06"
                  - option "07"
                  - option "08"
                  - option "09"
                  - option "10"
                  - option "11"
                  - option "12"
                  - option "13"
                  - option "14"
                  - option "15"
                  - option "16"
                  - option "17"
                  - option "18"
                  - option "19"
                  - option "20"
                  - option "21"
                  - option "22"
                  - option "23"
                  - option "24"
                  - option "25"
                  - option "26"
                  - option "27"
                  - option "28"
                  - option "29"
                  - option "30" [selected]
                  - option "31"
              - generic [ref=e62]:
                - generic [ref=e63]: CVV Code ?
                - textbox [ref=e64]: "123"
            - generic [ref=e66]:
              - generic [ref=e67]: Name on Card
              - textbox [ref=e68]: Test User
            - generic [ref=e69]:
              - generic [ref=e70]:
                - generic [ref=e71]: Apply Coupon
                - textbox [ref=e72]
              - button "Apply Coupon" [ref=e75] [cursor=pointer]
        - generic [ref=e76]:
          - generic [ref=e77]: Shipping Information
          - generic [ref=e79]:
            - generic [ref=e80]: testnHNk@gmail.com
            - textbox [ref=e81]: testnHNk@gmail.com
            - textbox "Select Country" [active] [ref=e84]: India
            - generic [ref=e85]: Place Order
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | 
  3  | export class PaymentPage {
  4  |     page: Page
  5  |     placeOrderButton: Locator
  6  |     orderConfirmation: Locator
  7  | 
  8  |     constructor(page: Page) {
  9  |         this.page = page
  10 |         this.placeOrderButton = this.page.getByRole('button', { name: /place order/i })
  11 |         this.orderConfirmation = this.page.getByText(/thank you for shopping with us/i)
  12 |     }
  13 | 
  14 |     async completePayment(paymentData: {
  15 |         nameOnCard: string
  16 |         cardNumber: string
  17 |         expiryMonth: string
  18 |         expiryYear: string
  19 |         cvv: string
  20 |         country: string
  21 |     }) {
  22 |         await this.page.getByText('Credit Card Number', { exact: true }).locator('..').locator('input').fill(paymentData.cardNumber)
  23 |         await this.page.getByRole('combobox').nth(0).selectOption(paymentData.expiryMonth)
  24 |         await this.page.getByRole('combobox').nth(1).selectOption(paymentData.expiryYear)
  25 |         await this.page.getByText('CVV Code ?', { exact: true }).locator('..').locator('input').fill(paymentData.cvv)
  26 |         await this.page.getByText('Name on Card', { exact: true }).locator('..').locator('input').fill(paymentData.nameOnCard)
  27 |         const country = this.page.locator('input[placeholder="Select Country"]')
  28 |         await country.fill(paymentData.country)
  29 |         await this.placeOrder()
  30 |     }
  31 | 
  32 |     async placeOrder() {
> 33 |         await this.placeOrderButton.click()
     |                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  34 |     }
  35 | }
```