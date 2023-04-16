const scraper_Shoe = (browser, url) =>
  new Promise(async (res, reject) => {
    try {
      let newPage = await browser.newPage();
      await newPage.setUserAgent(
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36"
      );
      await newPage.goto(url);
      console.log("vao " + url);
      const result = {};

      const images = await newPage.$$eval(
        ".wrapper-slide > .prd-detail-slide1.slick-initialized.slick-slider > .slick-list.draggable > .slick-track > .slick-slide",
        (els) => {
          data = els.map((el) => {
            let href = el.querySelector("div .thumbnail .cont-item img").src;
            return {
              href: href,
            };
          });
          return data;
        }
      );

      const info = await newPage.$eval(
        ".col-xs-12.col-sm-12.col-md-5.col-lg-5.prd-detail-right ",
        (el) => {
          let id = el
            .querySelectorAll("h6 ")[0]
            .querySelector(" .pull-left strong").innerText;

          let saleprice = el.querySelector("h5 .saleprice").innerText;

          let realprice = el.querySelector("h5 .realprice")
            ? el.querySelector("h5 .realprice").innerText
            : "";

          let description = el.querySelectorAll(".detail1")[2]
            ? el.querySelectorAll(".detail1")[2].innerText
            : "";

          let colorsSame = el
            .querySelectorAll(".color ul li")[0]
            .querySelectorAll("label");
          let colorsSame_ = [];
          for (let i = 0; i < colorsSame.length; i++) {
            let href = colorsSame[i]
              ?.getAttribute("data-link")
              ?.replace("https://ananas.vn", "");
            let color = colorsSame[i]
              .querySelector("span")
              .getAttribute("style")
              .replace("background-color: ", "")
              .replace(";", "");
            colorsSame_.push({
              color: color,
              href: href,
            });
          }

          let sizes = el
            .querySelectorAll(".row")[0]
            .querySelectorAll(".col-xs-12.col-sm-6.col-md-6 ")[0]
            .querySelectorAll(
              ".btn-group.bootstrap-select .dropdown-menu ul li"
            );
          let sizes_ = [];
          for (let i = 1; i < sizes.length; i++) {
            sizes_.push(sizes[i].querySelector("a span").innerText);
          }
          return {
            id: id,
            description: description,
            realprice: realprice,
            saleprice: saleprice,
            sizes: sizes_,
            colorsSame: colorsSame_,
          };
        }
      );

      result.images = images;
      result.info = info;
      await newPage.close();
      res(result);
    } catch (error) {
      console.log("loi o scraper shoe " + error);
    }
  });

module.exports = scraper_Shoe;
