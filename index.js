const puppeteer = require('puppeteer');
function run () {
    return new Promise(async (resolve, reject) => {
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.setDefaultNavigationTimeout(0); 
            await page.goto("https://www.flipkart.com/realme-x2-pearl-green-64-gb/p/itm75023903eb431");
            let urls = await page.evaluate(() => {
                let items = document.getElementsByClassName('_1vC4OE _3qQ9m1');
                
                 if(items[0].innerText === 'Currently Unavailable'){
                   let myResult = 'Product Out of stock'
                    return myResult;
                 }
                 else{
                    let myResults = 'Product In stock'
                    return myResults;
                 }
            })
            
            browser.close();
            return resolve(urls);
        } catch (e) {
            return reject(e);
        }
    })
}
run().then(console.log).catch(console.error);