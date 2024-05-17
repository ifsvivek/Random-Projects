const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  
  // Navigate to Google login page
  await page.goto('https://accounts.google.com/ServiceLogin');
  
  // Wait for user to manually enter email and password and navigate
  await page.waitForNavigation();
  
  // Navigate to Google Colab
  await page.goto('https://colab.research.google.com/');
  
  // TODO: Upload image, paste code, execute it, and copy the output
  
  // await browser.close();
})();
