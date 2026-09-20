
import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { DashboardPage } from '../pages/dashboardPage'
import product from '../testdata/product.json'


for(const p of product){

test.describe(`Test for product ${p.productName}` , ()=>{
let lp : LoginPage
let dp : DashboardPage
    test.beforeEach(async ({page}) =>{
         lp = new LoginPage(page)
         dp = new DashboardPage(page)
        await lp.launchUrl(p.url)
        await lp.loginIntoApplication(p.email, p.password)
    })

test(`Add an item to cart`, async() =>{

    await dp.searchAndAddProduct(p.productName,1)
    await expect(dp.addToCartMessage).toContainText(p.sucessMessage)
    await dp.navigateToCart()

})
test(`View an item`, async() =>{

    await dp.searchAndAddProduct(p.productName,0)
    await expect(dp.viewPageProductName).toHaveText(p.productName,{ignoreCase:true})
    await expect(dp.viewPageProductPrice).toBeVisible()

})
})
}