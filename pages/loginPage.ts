
// All the locators and methods related to login page should be present here
// class .. objects properties >> constructor >> methods

// Hardcode value should not be present inside the page. 
// avoid hardcoded value and code duplication.
// no assertions inside page layer 
// no launching of browser or page in the page layer.

/*
 "email" : "testnHNk@gmail.com",
 "password" :"Testing@1234",
*/
/*
Import -- trying to access data from some other file 
export -- you're giving the access to the data that you have for reusable purpose 
share and reuse the code in different file. 

*/
import { Locator, Page } from "@playwright/test";

export class LoginPage {
// class consist of object proerties and constructor and methods

page:Page
email:Locator
password:Locator
loginButton:Locator
errorMessage:Locator
homePageIdentifier:Locator

    constructor(page:Page){

            this.page = page
            this.email = this.page.locator('#userEmail')
            this.password= this.page.locator('#userPassword')
            this.loginButton = this.page.locator('#login')
            this.errorMessage = this.page.locator('#toast-container')
            this.homePageIdentifier = this.page.locator('[routerlink="/dashboard/"]')
    }
    // methods

        async launchUrl(url:string){
            await this.page.goto(url)
        }

        async loginIntoApplication(username:string, password:string) {
            await this.email.fill(username)
            await this.password.fill(password)
            await this.loginButton.click()
        }

}


