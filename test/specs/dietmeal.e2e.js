const formulirPage = require('../pageobjects/formulir.page')
const dashboardPage = require ('../pageobjects/dashboard.page')
const mainPage = require('../pageobjects/main.page')


describe('Success using dietmeal',() =>{
    it ('should able to set data', async  ()=>{
        await mainPage.setData("rajoo", "65", "157")
    })

    it('Should able to fill formulir', async()=>{
        await formulirPage.selectCondition()
    })

    it('Should redirect to dashboard page', async()=>{
        await expect(dashboardPage.dashboard).toBeExisting();
    })


})
