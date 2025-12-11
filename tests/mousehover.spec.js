import{test} from '@playwright/test'

test('Mouse Hover Actions', async({page})=>{

//     await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
//     await page.getByRole('button', {name:'Yes'}).click() //left click

// // //right click

// await page.goto('https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1')
// await page.getByRole('button',{name: 'Right Click'}).click({button:'right'})
// await page.pause()

// //double click
// await page.goto('https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2')
// await page.getByRole('button', {name:'Yes'}).dblclick()

// await page.getByRole('button', {name:'Yes'}).click({clickCount:2})

// //disabled
// await page.goto('https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4')
// await page.locator('#submit').click({force:true})
// let check= await page.locator('#submit').isChecked()
// console.log(check);

// // await page.locator('#submit').dispatchEvent('click')


//mouse down, up, hover

// await page.goto('https://demoapps.qspiders.com/ui/clickHold?sublist=0')
// await page.locator('#circle').hover()
// await page.mouse.down()
// await page.waitForTimeout(2000)
// await page.mouse.up()

// //scroll
await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabVertical')
await page.waitForTimeout(2000)
await page.mouse.wheel(0,1000)


// //scroll to a element
//  
// await page.waitForTimeout(2000)
// await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded()
// await page.pause()

// drag & drop
// await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
// // let source= await page.getByText('Laptop Charger')
// // let target = await page.locator("//div[.='Laptop Accessories']/parent::div")

// // await source.dragTo(target)

// await page.getByText('Laptop Charger').dragTo(page.locator("//div[.='Laptop Accessories']/parent::div"))
// await page.pause()

//drag by mouse

// await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
//  await page.getByText('Laptop Charger').hover()
//  await page.mouse.down()
// await page.locator("//div[.='Laptop Accessories']/parent::div").hover()
// await page.mouse.up()
//  await page.pause()

//  //by giving x & y coordinates
//  await page.goto('https://demoapps.qspiders.com/ui/dragDrop?sublist=0')
//  await page.getByText('Drag Me').hover()
//  await page.mouse.down()
// await page.waitForTimeout(2000)
// await page.mouse.move(200,100)
// await page.pause()

//by getting the location of a target element
await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
await page.getByText('Laptop Charger').hover()
await page.mouse.down()
let box = await page.locator("//div[.='Laptop Accessories']/parent::div").boundingBox() //returns the position of the element x, y , width, height
console.log(box);
await page.mouse.move(box.x,box.y)
await page.mouse.up()
await page.pause()

})