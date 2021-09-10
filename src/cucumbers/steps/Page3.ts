import {Given,When,Then} from '@cucumber/cucumber'
import {Selector,RequestMock} from 'testcafe'


const forecast = require('../../mock/forecast.json')

const mockUrl = new RegExp(/^https:\/\/api.openweathermap.org\/data\/2.5\/forecast/)
const mock = RequestMock().onRequestTo(mockUrl).respond(forecast,200,{
    'Access-Control-Allow-Origin': '*'
})


Given('open page3',async (t)=>{
    await t.navigateTo('http://localhost:3000/forecasteachthreehours').addRequestHooks(mock)
})

Then('the current page is page3', async (t)=>{
    const location =  await t.eval(()=>window.location)
    await t.expect(location.pathname).eql('/forecasteachthreehours') 
})

When('input the tokyo on page3',async (t)=>{

    const input = Selector('input')
    const confirm = Selector('button') 
    await t.typeText(input,'東京').click(confirm)
})
Then('confirm mock data on page3',async (t)=>{
    const cityName = Selector('.content').child(0)
    await t.expect(cityName.textContent).contains('Midsiberia1908')
})
When('test formik validation',async (t)=>{

    const input = Selector('input')
    const confirm = Selector('button') 
    await t.typeText(input,'123qwe').click(confirm)
})
Then('show formik validate message',async (t)=>{

    const errorMessage = Selector('p')
    await t.expect(errorMessage.textContent).eql('英数字はダメです。')

})




