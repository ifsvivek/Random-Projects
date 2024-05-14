const puppeteer = require("puppeteer");
const fs = require("fs").promises;

async function scrapeProductData() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto("https://www.pricebefore.com/poco-x5-pro-5g-horizon-blue-p758574.html");

    const productData = await page.evaluate(() => {
      const productSpecsElement = document.querySelector("div.cgd-page.mm-page.mm-slideout > div > div:nth-child(2) > div.cgd-col.cgd-16u.cmo-primary > div.cmo-mod.cmo-product-specs");
      const priceOverviewElement = document.querySelector("div.cgd-page.mm-page.mm-slideout > div > div:nth-child(1) > div > div.cmo-mod.cmo-product-price-overview > div");
      const discountPercentageElement = document.querySelector("div.cgd-page.mm-page.mm-slideout > div > div:nth-child(2) > div.cgd-col.cgd-24u.cmo-primary > div.cmo-mod.cmo-product > div.bd > div > div > div:nth-child(2) > div > div > table > tbody > tr:nth-child(1) > td.value > ul > li > div > span.discount-percent.js-product-discount-percentage");
      const productImageElement = document.querySelector("#product-img");
      const productNameElement = document.querySelector("div.cgd-page.mm-page.mm-slideout > div > div:nth-child(1) > div > div.cmo-mod.cmo-heading-generic > div > h1");

      return {
        productSpecs: productSpecsElement ? productSpecsElement.textContent.trim() : null,
        priceOverview: priceOverviewElement ? priceOverviewElement.textContent.trim() : null,
        discountPercentage: discountPercentageElement ? discountPercentageElement.textContent.trim() : null,
        productImage: productImageElement ? productImageElement.src : null,
        productName: productNameElement ? productNameElement.textContent.trim() : null,
      };
    });

    const formattedData = JSON.stringify(productData, null, 2);

    const filename = "product_data.json";
    await fs.writeFile(filename, formattedData);

    console.log("Product data saved to:", filename);
  } catch (error) {
    console.error("Error scraping product data:", error);
  } finally {
    await browser.close();
  }
}

scrapeProductData();