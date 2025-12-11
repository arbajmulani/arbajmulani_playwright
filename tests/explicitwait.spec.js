import{test} from '@playwright/test'

test('Explicit Wait', async({page})=>{

await page.goto('https://www.amazon.in/')

// await page.waitForURL('/.*Amazon*./')

// await page.waitForSelector('#nav-search-submit-button')  //wait for element to appear

// await page.waitForTimeout(2000) // wait script for some time
await page.locator('#nav-search-submit-button').waitForTimeout(state) // wait for locator


})