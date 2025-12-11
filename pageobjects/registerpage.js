
export class RegisterPage
{
 /**
   * @param {import('playwright').Page} page  //to get suggestion
   */
    constructor(page)   //idefiying all the locators as per the scenario & locating it
    {
       this.page= page
       this.nametf= page.getByPlaceholder('Enter your name')
       this.emailtf= page.getByPlaceholder('Enter Your Email')
       this.pwdtf= page.getByPlaceholder('Enter your password')
       this.rgstrbtn= page.getByRole('button',{name:'Register'})

    }


    //function or a method
    async registeraction(username, email,pwd)
    {
        await this.nametf.fill(username)
        await this.emailtf.fill(email)
        await this.pwdtf.fill(pwd)
        await this.rgstrbtn.click()
    }




}