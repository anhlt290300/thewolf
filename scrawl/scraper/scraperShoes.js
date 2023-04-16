async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      var totalHeight = 0;
      var distance = 300;
      var count = 0;
      var timer = setInterval(() => {
        //var scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        count += 300;
        if (count >= 60000) {
          clearInterval(timer);
          resolve();
        }
      }, 300);
    });
  });
}

const scraper_Shoes = (browser, url) =>
  new Promise(async (res, reject) => {
    try {
      let newPage = await browser.newPage();
      await newPage.setUserAgent(
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36"
      );
      await newPage.goto(url);

      await autoScroll(newPage);

      const result = {};

      const data = await newPage.$$eval(
        ".row.prd1-right-items > .col-xs-6.col-sm-6.col-md-4.col-lg-4.item",
        (els) => {
          data = els.map((el) => {
            let href = el.querySelector(".thumbnail .cont-item a").href;
            let type = el.querySelector(".thumbnail .caption .type")
              ? el.querySelector(".thumbnail .caption .type").innerText
              : "";

            let name = el
              .querySelector(".thumbnail .caption .name ")
              .innerText.replace(/\n/g, "")
              .trim();

            let soldout = el.querySelector(
              ".thumbnail .cont-item .soldout-text"
            )
              ? true
              : false;
            let color = el.querySelector(
              ".thumbnail .caption .color"
            ).innerText;
            if (el.querySelector(".thumbnail .cont-item .tag-blue"))
              type = el.querySelector(
                ".thumbnail .cont-item .tag-blue"
              ).innerText;
            return {
              soldout: soldout,
              href: href,
              type: type,
              name: name,
              color: color,
            };
          });
          return data;
        }
      );

      await newPage.close();
      //await browser.close();
      res(data);
    } catch (error) {
      console.log("loi o scraper shoes " + error);
    }
  });

module.exports = scraper_Shoes;
