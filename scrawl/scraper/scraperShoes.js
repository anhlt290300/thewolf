const scraper_Shoes = (browser, url) =>
  new Promise(async (res, reject) => {
    try {
      let newPage = await browser.newPage();
      await newPage.setUserAgent(
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36"
      );
      await newPage.goto(url);
      console.log("vao " + url);

      await newPage.waitForSelector("#collection-body");

      const shoes = await newPage.$$eval(
        "#collection-body > .col-md-12.col-sm-12.col-xs-12 > .row.filter-here > .content-product-list.product-list.filter.clearfix > .col-md-3.col-sm-6.col-xs-6.pro-loop.col-4",
        (els) => {
          shoes = els.map((el) => {
            let item = el.querySelector(
              ".product-block.product-resize.site-animation.fixheight"
            );
            let imgcard = {};
            let src1 = item
              .querySelectorAll(".product-img a picture")[0]
              .querySelector("img").src;
            let src2 = item
              .querySelectorAll(".product-img a picture")[1]
              .querySelector("img").src;
            let href_ =  item
            .querySelector(".product-img a").href
            imgcard = {
              src1: src1,
              src2: src2,
              href: href_,
            };
            let soldout =
              item.querySelector(".sold-out") === null
                ? 0
                : 1;

            let title = {
              content: item.querySelector(
                ".product-detail.clearfix .box-pro-detail h3 a"
              ).innerText,
              href: item.querySelector(
                ".product-detail.clearfix .box-pro-detail h3 a"
              ).href.replace('https://thewolf.vn',''),
            };

            let buyinstallment =
              item.querySelector(
                ".product-detail.clearfix .box-pro-detail .buy-installment"
              ) !== null
                ? {
                    app: item.querySelector(
                      ".product-detail.clearfix .box-pro-detail .buy-installment span b"
                    ).innerText,
                    content: item
                      .querySelector(
                        ".product-detail.clearfix .box-pro-detail .buy-installment span"
                      )
                      .innerText.replace(
                        item.querySelector(
                          ".product-detail.clearfix .box-pro-detail .buy-installment span b"
                        ).innerText,
                        ""
                      )
                      .replace("\n", ""),
                  }
                : null;
            return {
              imgcard: imgcard,
              soldout: soldout,
              title: title,
              buyinstallment: buyinstallment,
            };
          });
          return shoes;
        }
      );

      await newPage.close();
      res(shoes);
    } catch (error) {
      console.log("loi o scraper shoes " + error);
    }
  });

module.exports = scraper_Shoes;
