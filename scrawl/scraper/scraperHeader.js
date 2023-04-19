const scraper_Header = (browser, url) =>
  new Promise(async (res, reject) => {
    try {
      let newPage = await browser.newPage();
      await newPage.setUserAgent(
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36"
      );
      await newPage.goto(url);
      console.log("vao " + url);
      const result = {};

      const data = await newPage.$$eval(
        ".main-header > .menu-desktop.hidden-sm.hidden-xs > #nav > nav > ul > li",
        (els) => {
          data = els.map((el) => {
            let title = el.querySelector("a").title;
            let href = el
              .querySelector("a")
              .href.replace("https://thewolf.vn", "");
            let options = [];
            if (el.querySelector("ul.megaMenu")) {
              let option = [];
              let images = [];
              let listoption = el
                .querySelector("ul.megaMenu .col-xs-12.col-sm-3")
                .querySelectorAll("li");
              let listimages = el
                .querySelector("ul.megaMenu .col-xs-12.col-sm-9")
                .querySelectorAll(".col-xs-12.col-sm-4");
              for (let i = 0; i < listoption.length; i++) {
                let item = listoption[i].querySelector("a");
                option.push({
                  title: item.title,
                  href: item.href.replace("https://thewolf.vn", ""),
                });
              }
              for (let i = 0; i < listimages.length; i++) {
                let item = listimages[i].querySelector(".itemImgMega");
                if (item.querySelector(".boxImgMega a img") !== null) {
                  images.push({
                    src: item.querySelector(".boxImgMega a img").src,
                    href: item
                      .querySelector(".boxImgMega a")
                      .href.replace("https://thewolf.vn", ""),
                  });
                }
              }
              options.push({
                megaMenu: true,
                option: option,
                images: images,
              });
            } else {
              let option = [];
              let listoption = el.querySelectorAll("ul li");
              for (let i = 0; i < listoption.length; i++) {
                let item = listoption[i].querySelector("a");
                option.push({
                  title: item.title,
                  href: item.href.replace("https://thewolf.vn", ""),
                });
              }
              options.push({
                megaMenu: false,
                option: option,
                images: [],
              });
            }

            return {
              title: title,
              href: href,
              options: options,
            };
          });
          return data;
        }
      );

      result.header = data;
      await newPage.close();
      res(result);
    } catch (error) {
      console.log("loi o scraper header " + error);
    }
  });

module.exports = scraper_Header;
