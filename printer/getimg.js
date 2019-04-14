const puppeteer = require("puppeteer-core");
const moment = require("moment");

async function generateImage(message) {
  const value = message.message;
  const author = message.author;
  const formatted_date = moment(message.date).format("DD–MMM–YYYY");

  console.log("image renderer triggered");
  console.log("image renderer recieved following Text: " + value);

  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/chromium-browser"
  });
  const page = await browser.newPage();

  await page.goto(
    "file://" +
      process.cwd() +
      "/gen/index.html?text=" +
      value +
      "&author=" +
      author +
      "&date=" +
      formatted_date
  );

  const canvas = await page.$(".wrapper");
  await canvas.screenshot({
    encoding: "binary",
    type: "png",
    path: "output.png"
  });

  await browser.close();
}

module.exports = generateImage;
