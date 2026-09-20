
// Hooks in playwright:: 

/*
Hooks -- special methods used to perform setup and teardown process. 

// Different hooks in playwrigt:: 
1. test.beforeAll() --- it will get executed before any of the testcase start execution
    ex: DB connection, initiate logs 
2. test.beforeEach() -- before every testcase 
    ex: launch the url , pre- condition 
3. test.afterEach() -- after each testcase 
    ex: logout, closing the browser after each testcase 
4. test.afterAll() -- after all the testcase is executed, this hooks is get executed. 
    ex: DB connection terminate, reports generation, logs validation


    execution hierachy:: 

    1 2 3 4
#2 test.beforeEach() -- will be used in almost everyu test file. 

*/

import { test, expect} from '@playwright/test'

// execution flow 
test.afterEach(async() =>{
    console.log('After Each');
})
test.afterAll(async() =>{
    console.log('After all');
})
test.beforeAll(async() =>{
    console.log('before all');
})
test.beforeEach(async() =>{
    console.log('Before each');
})

test('testcase1', async() =>{
    console.log('testcase 1');
})
test('testcase2', async() =>{
    console.log('testcase 2');
})
test('testcase3', async() =>{
    console.log('testcase 3');
})


