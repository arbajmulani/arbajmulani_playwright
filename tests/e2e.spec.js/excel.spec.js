import{test} from '@playwright/test'
import { RegisterPage } from '../../pageobjects/registerpage';
import excel from 'exceljs'
import {readdatafromexcel} from '../../Utility/excelutility'

// fetch data from excel sheet
test('read data from excel', async({page}) => {

    let excelpath = 'C:/Users/arbaj/OneDrive/Desktop/Playwright/testdata/exceldata.xlsx'
       let url = await readdatafromexcel(excelpath, 'Sheet1', 1, 1)            
       let username = await readdatafromexcel(excelpath, 'Sheet1', 2, 1)
       let email = await readdatafromexcel(excelpath, 'Sheet1', 3, 1)
       let password = await readdatafromexcel(excelpath, 'Sheet1', 4, 1)
       
       await page.goto(url)
       const rgstr= new RegisterPage(page)
       await rgstr.registeraction(username,email,password)

 
    
});

// fetch multiple data from excel sheet
test('readmultiple data', async({page}) => {

    let book= new excel.Workbook()
    await book.xlsx.readFile('C:/Users/arbaj/OneDrive/Desktop/Playwright/testdata/exceldata.xlsx')
    let sheet = book.getWorksheet('Sheet1')

    for (let row = 1; row <=sheet.rowCount ; row++) 
        
    {
        for (let column = 1; column <= sheet.actualColumnCount ; column++) {
           
            let data=sheet.getRow(row).getCell(column).toString()
            console.log(data);  
            
        }
         
    }
  
});


 test('write data to excel', async({page}) => {

    let book= new excel.Workbook()
    await book.xlsx.readFile('C:/Users/arbaj/OneDrive/Desktop/Playwright/testdata/exceldata.xlsx')
   let sheet= await book.addWorksheet('Sheet2')
   sheet.getRow(1).getCell(1).value='playwright'
   sheet.getRow(2).getCell(1).value='Testing'
    
   await book.xlsx.writeFile('C:/Users/arbaj/OneDrive/Desktop/Playwright/testdata/exceldata.xlsx')
        
    });