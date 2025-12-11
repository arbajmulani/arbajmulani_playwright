import excel from 'exceljs'

export async function readdatafromexcel(path,sheetname,rownum,celnum) 
{
  let book = new excel.Workbook()  
  await book.xlsx.readFile(path)
    let sheet= await book.getWorksheet(sheetname)
   let data= await sheet.getRow(rownum).getCell(celnum).toString()
   return data

}