import {expect, test} from '@playwright/test'

test('notification', async({browser}) => {

    const context = await browser.newContext(
        {
            permissions:['notifications'] // given 'notifications' inside permission allows notification and not given 'notifications' blocked notification
        }
    )

    const page = await context.newPage()
    await page.goto('https://demoapps.qspiders.com/ui/browserNot?sublist=0')
    await page.getByRole('button',{name:'Notification'}).click()

    //verify permission

    //it is a method in playwright which helps to run javascript code inside the browser not in node.js

   let result= await page.evaluate(()=>Notification.permission)
   console.log('permision :' , result);

   expect(result).toBe('granted')

   await page.pause()
})