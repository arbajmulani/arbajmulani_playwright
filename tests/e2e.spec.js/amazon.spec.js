import{test,expect} from '@playwright/test'
import { AmazonHomePage } from '../../pageobjects/amazoonpage'

test('amazon e2e script', async({browser}) => {

    const context= await browser.newContext()
    const page= await context.newPage()

    const amznpg =new AmazonHomePage(page)

    await amznpg.amazonurl('https://www.amazon.in/')    
    await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')

    await amznpg.searchproduct('sumsung mobile')
    await amznpg.selectfromautosugg('2000')

})