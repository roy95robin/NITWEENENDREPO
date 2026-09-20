
import {test, expect} from '@playwright/test'

import { LoginPage } from '../pages/loginPage'

// first we will see all the details with hardcoded value : 
const url = 'https://rahulshettyacademy.com/client/#/auth/login'
let email = "testnHNk@gmail.com"
let password = "Testing@1234"
let errormessage ='Incorrect email or password. '
let invalidPassword = "ashvasasasf"


// write the test logic 
let lp:LoginPage // lp is reference of login page and using the reference we are creating an object of class

test.describe('Login all scenario', () =>{
test.beforeEach(async ({page}) =>{
     lp = new LoginPage(page)
     await lp.launchUrl(url)
})

test('valid login', async({page}) =>{

    // const lp = new LoginPage(page)
    // await lp.launchUrl(url)
    await lp.loginIntoApplication(email, password)
    await expect(lp.homePageIdentifier).toBeVisible()
})

test('invalid login', async({page}) =>{
    // const lp = new LoginPage(page)
    //  await lp.launchUrl(url)
     await lp.loginIntoApplication(email,invalidPassword)
     await expect(lp.errorMessage).toBeVisible()
})

})