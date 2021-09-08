import { Given, When, Then} from '@cucumber/cucumber';
import { Selector, RequestMock} from 'testcafe';

// require is ok
// import is failed 
// maybe the testcafe use common.js 
const mockData = require('../../mock/weather.json')


const mockUrl = new RegExp(/^https:\/\/api.openweathermap.org\/data\/2.5\/weather/)
const mock = RequestMock().onRequestTo(mockUrl).respond(mockData,200,{
  'Access-Control-Allow-Origin': '*'
})


Given('Open home page',async (t)=>{
    await t.navigateTo('http://localhost:3000/').addRequestHooks(mock)
} )

Then('current page is Home',async (t)=>{
  const location = await t.eval(()=>window.location)
  await t.expect(location.pathname).eql('/')
})

When('click page2 link',async (t)=>{
  const link = Selector('a').withText('Page2')
  await t.click(link)
})

Then('current page is Page2',async (t)=>{
  const location = await t.eval(()=>window.location)
  await t.expect(location.pathname).eql('/currentweather')
})

When('input text tokyo',async (t)=>{
  const input = Selector('input')
  const confirm = Selector('button') 
  await t.typeText(input,'東京').click(confirm)
})

Then('confirm mock data',async (t)=>{
  const cityName = Selector('.item').nth(0);
  // const error = Selector('p');
  // await t.expect(error.textContent).contains('エラーが発生しました。')
  await t.expect(cityName.textContent).contains('Osamu')
})

When('click home link',async (t)=>{

  const link = Selector('a').withText('Home')
  await t.click(link)

})


