import {test} from '@playwright/test'

test('iframe', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/frames?sublist=0')
    const frame = await page.frameLocator('//iframe[@class="w-full h-96"]')   // suggested 
    // const frame= await page.locator('//iframe[@class="w-full h-96"]').contentFrame() // optional
    await frame.getByLabel('Username:').fill('abc')
    await frame.getByLabel('Password:').fill('abc123')
    await frame.getByRole('button',{name:'Login'}).click()
    await page.pause()
    
});

test('nested frame', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/frames/nested?sublist=1')
   const parentframe= await page.frameLocator('//iframe[@class="w-full h-96"]')
    const childframe = await parentframe.frameLocator('iframe')
    await childframe.getByLabel('Email:').fill('abc')
    await childframe.getByLabel('Password:', {exact:true}).fill('abc123')
   
   


    //await parentframe.getByLabel('Email:').fill('jhgjk')

    //  await page.mainFrame() // switch to top frame 
    //  await page.pause()

     const allframe = await page.frames()
     console.log(allframe.length);
     
});