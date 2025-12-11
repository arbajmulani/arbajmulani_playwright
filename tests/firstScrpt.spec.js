
import{test,expect} from "@playwright/test"

test('sample first script',async({browser}) =>{

const context = await browser.newContext()
const page = await context.newPage()
await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
const url = await page.url()
let title = await page.title()
console.log(title);

let viewport = await page.viewportSize()
console.log(viewport);
await page.setViewportSize({width:1280, height:720})
// await page.pause()

})


test('Registration',async({page}) =>{


await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
await page.getByPlaceholder('Enter your name').fill('Xyz')
await page.getByPlaceholder('Enter Your Email').fill('xyz@gmail.com')
await page.getByPlaceholder('Enter your password').fill('Xyz@123')
await page.getByRole("button",{name:'Register'}).click()
await page.pause()

})

test('TextVerification',async({page}) =>{


await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
await page.getByRole("button",{name:'Yes'}).click()

let text = await page.locator(`//span[text()='You selected "Yes"']`).textContent() 
console.log(text)

let txt = await page.getByText(`You selected "Yes"`).textContent()
console.log(txt)

await expect(text).toContain('Yes')   // Import expect at top for perform assertion


})

test('(If match found is not 1 of 1)',async({page}) =>{


await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
await page.getByText('Register',{exact:true}).first().textContent() //To Locate first element
await page.getByText('Register',{exact:true}).nth(1).textContent() //To Locate nth element
await page.getByText('Register',{exact:true}).last().textContent() //To Locate Last element

//getBylable
await page.getByLabel('Email Id').fill('arbajmulani.m@gmail.com')

//getBYRole
await page.getByRole('link',{name:'Button', exact:true}).click()

})

test('GetByMethods',async({page}) =>{

await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
//getBylable
await page.getByLabel('Email Id').fill('arbajmulani.m@gmail.com')

//getBYRole
await page.getByRole('link',{name:'Button', exact:true}).click()

await page.getByRole('link',{name:'Image', exact:true}).click()

//getByAltText
await page.getByAltText('ORDER PLACED').click()

})