import {test} from '@playwright/test'
import {RegisterPage} from '../../pageobjects/registerpage'
import paradata from '../../testdata/parameterization.json' assert{type:'json'}

// import multiple data from jason file
test('Parmeterization', async({page}) => {

  for( let pdata of paradata)
  {
    await page.goto(pdata.url)
    const reg= new RegisterPage(page)
    await reg.registeraction(pdata.username, pdata.emailid, pdata.pwd)
    await page.pause()
  }
  

    
});