import {test} from '@playwright/test'
import path from 'path';
import f1 from 'fs'

test('File download', async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
    await page.getByPlaceholder('Enter text here').fill('Playwright File Download')

    //  Custom folder to store downloaded file
    let customfolder = 'C:/Users/arbaj/OneDrive/Desktop/Playwright/filedownload'
   
    // Custom file name for downloaded file
    let customfilename ='exampleDownloadFile.txt'

     let fullpath= path.join(customfolder,customfilename) 
    console.log(fullpath);

    // Main lines for download the file
    let dowloadpromise = page.waitForEvent('download')    //1st promise it is listner wait for the dowload event to happen
    page.getByRole( 'button', {name: 'Download',exact:true}).click()    
    let dowloadedfile = await dowloadpromise

    await dowloadedfile.saveAs(fullpath)  // save downloaded file in custom folder 

     //temp folder 
    // temperory path where initially file save before save to custom folder
    console.log('Dowloaded temp path', await dowloadedfile.path()); 


       //verify if its saved
    
        if(f1.existsSync(fullpath))    //existsSync is a method from nodejs file it is used to check whether 
                                        // file or folder exists in your sysytem
                                        // F1 is veriable which is crated to import fs we can give anything instead of F1
        {
    
            console.log('File is saved');
            
        }
        else
        {
            console.log('file is not saved');
            
        }
})

   