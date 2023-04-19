const scraper = require("./scraper/scraper");
const fs = require("fs");
const scraperController_Header = async (browserInstance, url) => {
  try {
    let browser = await browserInstance;

    let header = await scraper.scraper_Header(browser, url);
    
    await browser.close();

    // // Lấy dữ liệu trong file json ra
    // let file =
    //   fs.readFileSync("shoes.json").byteLength === 0
    //     ? []
    //     : JSON.parse(fs.readFileSync("shoes.json"));

    // //// push cái list manga mới đào về đc vô
    // file.push(data);
    // //// ghi vô file lại
    // fs.writeFileSync("shoes.json", JSON.stringify(data), (err) => {
    //   if (err) console.log("Đào data thất bại " + genre);
    //   else console.log("Đào data thành công " + genre);
    // });

    return header;
  } catch (error) {
    console.log("loi o scapercontroller " + error);
  }
};

const scraperController_Filter = async (browserInstance, url) => {
  try {
    let browser = await browserInstance;

    let data = await scraper.scraper_Filter(browser, url);

    await browser.close();

    // // Lấy dữ liệu trong file json ra
    // let file =
    //   fs.readFileSync("filter.json").byteLength === 0
    //     ? []
    //     : JSON.parse(fs.readFileSync("filter.json"));

    // //// push cái list manga mới đào về đc vô
    // file.push(data);
    // //// ghi vô file lại
    // fs.writeFileSync("filter.json", JSON.stringify(data), (err) => {
    //   if (err) console.log("Đào data thất bại " + genre);
    //   else console.log("Đào data thành công " + genre);
    // });

    return data;
  } catch (error) {
    console.log("loi o scapercontroller " + error);
  }
};

module.exports = {
  scraperController_Header,
  scraperController_Filter,
};
