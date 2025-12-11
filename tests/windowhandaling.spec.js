import {test} from '@playwright/test'

// use broswer fixture due to multiple window
test('multiple window handling', async({browser}) => {
    const context= await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://demoapps.qspiders.com/ui/browser?sublist=0')

   let pagepromise = context.waitForEvent('page')
   await page.getByRole('button', {name:'view more'}).first().click()
   const newpage= await pagepromise
   await newpage.getByRole('button',{name:'Add to Cart'}).click()  

//    // or
//    const [newpage]= await Promise.all([
//     context.waitForEvent('page'),
//      page.getByRole('button', {name:'view more'}).first().click()
//    ])
//    await newpage.getByRole('button',{name:'Add to Cart'}).click()

   let pages = await context.pages()
   console.log(pages.length);
   
    let title1= await pages[0].title()
    console.log(title1);

    let title2 = await pages[1].title()
    console.log(title2);

    await pages[0].bringToFront()  // switch to First page
    await pages[1].bringToFront()  // switch to second page
    await pages[0].bringToFront()
    // await pages[1].bringToFront()
    // await pages[1].close()
    
    await page.pause()

   });