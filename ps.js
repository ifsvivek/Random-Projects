const puppeteer = require("puppeteer");

async function scrapeProductData() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    // Replace with the actual URL of the product page
    await page.goto(
      "https://www.pricebefore.com/oneplus-nord-ce-3-lite-5g-p779628.html"
    );

    // Wait for the product price element to be available (adjust selector if needed)
    await page.waitForSelector(".js-product-price");

    const productData = await page.evaluate(() => {
      const currentPriceElement = document.querySelector(".js-product-price");
      const lowestPriceElement = document.querySelector(".lowest div");
      const highestPriceElement = document.querySelector(".highest div");

      const descriptionList = document.querySelectorAll(".bd ul li");
      const descriptionItems = [];
      for (const item of descriptionList) {
        descriptionItems.push(item.textContent.trim());
      }

      return {
        currentPrice: currentPriceElement
          ? currentPriceElement.textContent.trim()
          : null,
        lowestPrice: lowestPriceElement
          ? lowestPriceElement.textContent.trim()
          : null,
        highestPrice: highestPriceElement
          ? highestPriceElement.textContent.trim()
          : null,
        description: descriptionItems,
      };
    });

    console.log(productData);
  } catch (error) {
    console.error("Error scraping product data:", error);
  } finally {
    await browser.close();
  }
}

scrapeProductData();
