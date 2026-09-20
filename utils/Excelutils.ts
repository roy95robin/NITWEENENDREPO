
// Here comman logic of excel must be written. 

import xlsx from 'xlsx'


export class Excelutils {

    // which file to be read from excel :: filepath 
    // which sheet need to be picked:: sheetname

    static getExcelData(filepath:string, sheetname:string){

        try {

            // there is a method called as readile present inside the excel library 
            // readfile used to read the excel and return the value in workbook** formet. 
            // workbook formet is nothing but having sheetname and excel value

            const wb = xlsx.readFile(filepath) // to read file there must be some filepath .. where file is available
            const sheet = wb.Sheets[sheetname] 
            // convert the sheet into json 
           const data= xlsx.utils.sheet_to_json(sheet)
           return data

        }catch(error){
            console.log(error);
        }

    }

}
