import {test} from '@playwright/test'

test('keyboard actions', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/keyboard?sublist=0')
    await page.locator('[name="handleInput"]').click()
    //await page.keyboard.press('A')
    await page.keyboard.type('playwright' ,{delay:100})

    await page.keyboard.press('Control+A') //select
    await page.waitForTimeout(1000)
    await page.keyboard.press('Control+X') //cut
    await page.waitForTimeout(1000)
    await page.keyboard.press('Control+V') //paste
    await page.waitForTimeout(1000)
    //await page.keyboard.press('Control+A') //select
    await page.waitForTimeout(1000)

    await page.keyboard.down('Control')
    await page.keyboard.press('A')
    await page.keyboard.up('Control')

    await page.keyboard.press('Delete')

    await page.locator('[name="handleInput"]').press('Enter')
  
});

