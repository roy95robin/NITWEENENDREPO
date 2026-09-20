
// what all things should be placed here: Locators and methods/action

import { Locator, Page } from "@playwright/test";

export class DashboardPage{

page:Page
products:Locator
homePageProductPrice:Locator
addToCartMessage:Locator
cart:Locator
viewPageProductName:Locator
viewPageProductPrice:Locator


// constructor:: which will store all the locators 
    constructor(page:Page) {
        
        this.page = page
        this.products = this.page.locator('div.card-body')
        this.homePageProductPrice = this.page.locator('.card-body div.text-muted')
        this.addToCartMessage= this.page.locator('#toast-container')
        this.cart = this.page.locator('[routerlink="/dashboard/cart"]')
        this.viewPageProductName= this.page.locator('.col-lg-6.rtl-text h2')
        this.viewPageProductPrice = this.page.locator('.col-lg-6.rtl-text h3')

    }

    // create a methods/action
    async searchAndAddProduct(productName:string,index:number){
        // wait for atleast one product to be available on the page 
        await this.products.nth(0).waitFor()
        // take the count of product 
        const countOfProduct = await this.products.count()
        console.log(countOfProduct);

        // iterate through all the list of product and pick the one that is required based on testdata
        for(let i = 0;i<countOfProduct;i++){
            const productText = await this.products.nth(i).locator('b').textContent()

                if(productText?.trim().toLowerCase() == productName.trim().toLowerCase()){
                    await this.products.nth(i).locator('button').nth(index).click()
                    break
                }

        }

    }
    async navigateToCart(){
        await this.cart.click()
    }

}