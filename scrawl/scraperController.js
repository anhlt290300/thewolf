const arr = [
  "shoes-for-decor",
  "chelsea-boot-nam",
  "derby-nam",
  "giay-loafer-nam",
  "giay-slipper-nam",
  "harness-boot-nam",
  "combat-boot-nam",
  "oxford-nam",
  "thewolf-slide-sandal",
  "chelsea-boot-nu",
  "combat-boot-nu",
  "derby-nu",
  "giay-loafer-nu",
  "giay-slipper-nu",
  "the-lady-wolf-slide-sandal",
  "the-sean-wolf-belts",
  "sock",
  "the-amano-totebag",
  "the-s-wolf-tote-bag-collection",
  "the-wolf-jacket",
  "the-sean-wolf-collection",
  "the-mars-wolf-collection",
];

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

const scraperController_Shoes = async (browserInstance, url) => {
  try {
    let browser = await browserInstance;
    data = [];
    //
    for (let j = 0; j < arr.length; j++) {
      let url = "https://thewolf.vn/collections/" + arr[j];
      let shoes = await scraper.scraper_Shoes(browser, url);
      console.log(shoes.length);
      for (let i = 0; i < shoes.length; i++) {
        let { imgcard, soldout, title, buyinstallment } = shoes[i];
        let {
          imgs,
          code,
          guarantee,
          exchange,
          discount,
          colors,
          sizes,
          price,
        } = await scraper.scraper_Shoe(browser, imgcard.href);
        imgcard.href = imgcard.href.replace("https://thewolf.vn", "");
        data.push({
          type: arr[j],
          soldout: soldout,
          title: title,
          imgcard: imgcard,
          buyinstallment: buyinstallment,
          imgs: imgs,
          code: code,
          price: price,
          guarantee: guarantee,
          exchange: exchange,
          discount: discount,
          colors: colors,
          sizes: sizes,
        });
        //console.log(colors);
      }
    }

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

const scraperController_Blogs = async (browserInstance, url) => {
  try {
    let browser = await browserInstance;
    data = [];
    //

    let blogs = await scraper.scraper_Blogs(browser, url);

    for (let i = 0; i < blogs.length; i++) {
      let { href, img, title, author, content_trailer } = blogs[i];
      let url_ = href;
      let { content } = await scraper.scraper_Blog(browser, url_);
      data = [
        ...data,
        {
          href: href,
          img: img,
          title: title,
          author: author,
          content_trailer: content_trailer,
          content: content,
        },
      ];
    }

    //await browser.close();

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
  scraperController_Shoes,
  scraperController_Blogs,
};
