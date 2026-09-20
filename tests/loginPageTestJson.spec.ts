
import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import data from '../testdata/login.json'

let lp:LoginPage 
test.beforeEach(async ({page}) =>{
     lp = new LoginPage(page)
     await lp.launchUrl(data.url)
})

test('valid login', async({page}) =>{
    await lp.loginIntoApplication(data.email, data.password)
    await expect(lp.homePageIdentifier).toBeVisible()
})

test('invalid login', async({page}) =>{
     await lp.loginIntoApplication(data.email,data.invalidPassword)
     await expect(lp.errorMessage).toBeVisible()
})