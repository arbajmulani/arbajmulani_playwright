import{test} from '@playwright/test'
import { RegisterPage } from '../../pageobjects/registerpage';
import regdata from "../../testdata/registerdata.json" assert{type:'json'}  // imported jason file for data fetching

test('Registering the user', async({page}) => {

    await page.goto(regdata.url)
    const rgstr = new RegisterPage(page)
    await rgstr.registeraction(regdata.username, regdata.emailid, regdata.pwd)
    await page.pause()
    
});