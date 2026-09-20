


import {test, expect} from '@playwright/test'

import { LoginPage } from '../pages/loginPage'

// first we will see all the details with hardcoded value : 
const url = 'https://rahulshettyacademy.com/client/#/auth/login'
let email = "testnHNk@gmail.com"
let password = "Testing@1234"
let errormessage ='Incorrect email or password. '
let invalidPassword = "ashvasasasf"


// write the test logic 
let lp 
test.beforeEach(async ({page}) =>{
     lp = new LoginPage(page)
     await lp.launchUrl(url)
})

test('valid login', async({page}) =>{

    await lp.loginIntoApplication(email, password)
    await expect(lp.homePageIdentifier).toBeVisible()
})

test('invalid login', async({page}) =>{
     await lp.loginIntoApplication(email,invalidPassword)
     await expect(lp.errorMessage).toBeVisible()
})