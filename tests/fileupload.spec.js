import{test} from '@playwright/test'
import path from 'path';

test('file upload', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //console.log(__dirname); //it gives the current folder

    await page.locator('#singleFileInput').setInputFiles(path.join(__dirname, '../newuploadfile/test.txt'))
    await page.getByRole('button',{name:'Upload Single File'}).click()
    await page.pause()
})

test('file upload multiple file', async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    //console.log(__dirname); //it gives the current folder

    await page.locator('#multipleFilesInput').setInputFiles([path.join(__dirname, '../newuploadfile/test.txt'), path.join(__dirname, '../newuploadfile/jenkin.txt')])
    await page.getByRole('button',{name:'Upload Multiple Files'}).click()
    await page.pause()


});