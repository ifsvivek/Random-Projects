
## random notes


### this uses puppeteer to scrape the data from the website

url = 'https://www.pricebefore.com/'

use **pss.js** to scrape the data from the website

usage: 
- `npm install`
- `node pss.js`   // this will scrape the data from the website and save it to a file




these are the selectors for the above elements


- body > div.cgd-page.mm-page.mm-slideout > div > div:nth-child(2) > div.cgd-col.cgd-16u.cmo-primary > div.cmo-mod.cmo-product-specs
- body > div.cgd-page.mm-page.mm-slideout > div > div:nth-child(1) > div > div.cmo-mod.cmo-product-price-overview > div
- body > div.cgd-page.mm-page.mm-slideout > div > div:nth-child(2) > div.cgd-col.cgd-24u.cmo-primary > div.cmo-mod.cmo-product > div.bd > div > div > div:nth-child(2) > div > div > table > tbody > tr:nth-child(1) > td.value > ul > li > div > span.discount-percent.js-product-discount-percentage
- body > div.cgd-page.mm-page.mm-slideout > div > div:nth-child(2) > div.cgd-col.cgd-24u.cmo-primary > div.cmo-mod.cmo-product > div.bd > div > div > div:nth-child(1) > div > div.bd > div > img.zoomImg
- body > div.cgd-page.mm-page.mm-slideout > div > div:nth-child(1) > div > div.cmo-mod.cmo-heading-generic > div > h1

these are the selectors for the above elements
