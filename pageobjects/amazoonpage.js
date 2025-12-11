

export class AmazonHomePage 
{
/**
   * @param {import('playwright').Page} page  //to get suggestion
   */

constructor(page)
{
    this.page= page
    this.searchtf = page.getByLabel('Search Amazon.in')
    this.allsug= page.locator('//div[@class="left-pane-results-container"]/div')
    this.productsumsung= page.getByRole('heading',{name:'Samsung Galaxy A35 5G (Awesome Iceblue, 8GB RAM, 128GB Storage) Without Offer'})

}

async amazonurl(url)
{
    await this.page.goto(url)
    await this.page.waitForURL(url)
}

async searchproduct(productname)
{
    await this.searchtf.fill(productname)
    await this.allsug.first().waitFor()
}


async selectfromautosugg(value)
{

    let allloc= await this.allsug.all()

    for (let loc of allloc)
    {
        let text = await loc.textContent()
        // console.log(text);
        if(text.includes(value))
        {
            console.log(text);
            await loc.click()
            break
        }  

    }

}

}