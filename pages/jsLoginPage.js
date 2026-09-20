
import { Locator, Page } from "@playwright/test";

export class LoginPage {
// class consist of object proerties and constructor and methods

    constructor(page){

            this.page = page
            this.email = this.page.locator('#userEmail')
            this.password= this.page.locator('#userPassword')
            this.loginButton = this.page.locator('#login')
            this.errorMessage = this.page.locator('#toast-container')
            this.homePageIdentifier = this.page.locator('[routerlink="/dashboard/"]')
    }
        async launchUrl(url){
            await this.page.goto(url)
        }
        async loginIntoApplication(username, password) {
            await this.email.fill(username)
            await this.password.fill(password)
            await this.loginButton.click()
        }

}


