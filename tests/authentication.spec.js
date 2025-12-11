import{test,expect} from "@playwright/test"

test('Autthentication',async({browser}) =>{

const context = await browser.newContext({
    httpCredentials:{
        username : 'admin',
        password : 'admin'
    }
})
const page = await context.newPage()
await page.goto('https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/') //username nad password will inert automatically

   // Fetch the text after enter username and password
   let msg= await page.getByRole('paragraph',{name:'congratulations with valid credentials'}).textContent()
   console.log(msg);
   
  //assert text
   await expect(page.locator('//body/p')).toContainText('congratulations with valid credentials')

   await page.pause()

})