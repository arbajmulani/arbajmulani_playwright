 import{test} from '@playwright/test'

test('Element Control',async({page})=>{  

    // await page.goto('https://demoapps.qspiders.com/ui?scenario=1') 
    // await page.getByPlaceholder('Enter your name').fill('Arbaj Mulani')  // send data to test field using fill method

    // //buttons

    // await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
    // await page.getByRole('button', {name:'Yes'}).click()

    // //*Links
    // await page.goto('https://demoapps.qspiders.com/ui/link?sublist=0')
    // await page.getByRole('link',{name:'Electronics'}).click()
    // // await page.waitForTimeout(2000)

    // //Checkbox
    // await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0')
    // await page.locator('#domain_a').check()
    // await page.locator('#domain_c').check()
    // await page.locator('#mode_b').check()
    // await page.locator('#mode_c').check()

    // //Radio Button
    // await page.goto('https://demoapps.qspiders.com/ui/radio?sublist=0')
    // await page.locator('#attended').check()

    // //Dropdown
    // await page.goto('https://demoapps.qspiders.com/ui/dropdown?sublist=0')
    // await page.locator('#country_code').selectOption('+14')
    // await page.locator('#select3').selectOption('Poland')

    //MultiSelect
    await page.goto('https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1')
    await page.locator('#select-multiple-native').selectOption(['Mens Casual Premium ...','Mens Cotton Jacket...','Solid Gold Petite Mi...'])
    await page.getByRole('button',{name:'Add'}).click()

    let productName = await page.locator('//tbody').allTextContents() // This will Fetch multiple visible text which is dont have one of one locator
    console.log('All Products are '+ productName);

    let singleProdName = await page.locator('//tbody//tr[1]//td[1]').textContent() // This will Fetch single visible text which is have one of one locator
    console.log('One Product Name is '+ '"'+ singleProdName+'"')

    await page.pause()

    })
