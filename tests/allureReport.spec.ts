
// Allure report coniguration: 

/*
Playwright inbuilts reports are:: 
html, line, list ,dot
 Allure report--- advance version of reports:: 

 ::: Installation of allure report::: 

 1. npm install --save-dev allure-commandline
 2. npm install --save-dev allure-playwright
 3. Add the allure report inside your playwright config file. 
     reporter: [['html'],["allure-playwright"]],

     Allure folder will be created automatically when you run the file for the first time. 

     Execute the file for atleast one time.
     Post execution allure-result folder will be created.
     Open the allure report using below commands 
     
     npx allure serve allure-results

     run the below command to clean and capture the historical data 
     npx allure generate allure-results --clean-o allure report

     this will create the history folder inside allure report 
     copy the history folder and paste it inside the allure-result 
     Perform the execution of code again and check the allure report.



*/