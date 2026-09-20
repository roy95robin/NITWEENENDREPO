
import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { DashboardPage } from '../pages/dashboardPage'
import { Excelutils } from '../utils/Excelutils'
import path from 'path'

const filepath = path.join(__dirname, '../testdata/login.xlsx')
// take the sheetname from the excel 
const sheetname = 'LoginData'
let datas:any
try{
     datas = Excelutils.getExcelData(filepath,sheetname)
}catch(e){
    console.log(e);
}

let lp: LoginPage
let dp:DashboardPage

test.beforeEach(async ({page}) =>{
    lp= new LoginPage(page)
    dp = new DashboardPage(page)
})

for(let product of datas ){

test(`Add an item to cart ${product.productName}`, async() =>{

await lp.launchUrl(product.url)
await lp.loginIntoApplication(product.username, product.password)
await expect(lp.homePageIdentifier).toBeVisible()
await dp.searchAndAddProduct(product.productName,1)
await expect(dp.addToCartMessage).toHaveText('Product Added To Cart')
await dp.navigateToCart()

})

} 
