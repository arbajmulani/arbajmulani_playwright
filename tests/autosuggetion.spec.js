import {test} from '@playwright/test'

test('Autosuggestion drop down', async({page}) => { 

        await page.goto('https://www.amazon.in')
    await page.getByPlaceholder('Search Amazon.in').fill('mobi')
    await page.waitForSelector('(//div[@class="left-pane-results-container"]/div)[1]')  // Load all auto suggetions

    let allsugg=  await page.locator('//div[@class="left-pane-results-container"]/div').all()
    console.log(allsugg);  // Print all locators

    for(let sugg of allsugg)
    {
      let t  = await sugg.textContent()
      console.log(t);   // Print all locators text
      if(t.includes('android'))
        {
            await sugg.click()
            break                                                                                                                   
      }

       for (let i = 0; i < 10; i++)
       {
         await page.keyboard.press('ArrowDown')
         await page.waitForTimeout(100)
    
       }

    //await page.waitForTimeout(3000)

      for (let i = 0; i < 5; i++)
       {
         await page.keyboard.press('ArrowUp')
         await page.waitForTimeout(100)
    
       }


    await page.pause()
      
    }

    })