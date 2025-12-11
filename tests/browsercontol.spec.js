 import{test} from '@playwright/test'

test('Browser actions',async({browser})=>{

const context = await browser.newContext() // creating one new empty browser without any history or cookies
const page= await context.newPage() //creating one new tab in the context
await page.goto('https://www.amazon.in') //navigating to url
await page.reload() //reloads the current page
await page.goBack() //navigates to the previous history page
await page.goForward() //navigates to the next page in history
let viewportsize = await page.viewportSize() // returns thhe browser in pixels
console.log(viewportsize);
await page.setViewportSize({width:1280, height:780}) // to resize your browser window
await page.screenshot({path:'./screenshot/screen1.png', fullPage:true}) //take the cureent page browser screenshoot
const page1= await context.newPage() //opening one more new tab 
await page1.goto('https://www.flipkart.com') // in new tab navigating to different url
await page1.screenshot({path:'./screenshot/screen2.png'}) 
let pages = await context.pages().length //returns number of tabs or windows opened in the context
// console.log(pages);
console.log(pages);
let title= await page.title()
console.log(title);
let title1= await page1.title()
console.log(title1);

// await page.close() // close the tab or browser








})


