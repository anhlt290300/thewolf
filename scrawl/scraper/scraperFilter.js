const scraper_Filter = (browser, url) =>
  new Promise(async (res, reject) => {
    try {
      let newPage = await browser.newPage();
      await newPage.setUserAgent(
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36"
      );
      await newPage.goto(url);
      console.log("vao " + url);
      //await newPage.waitForSelector(".prd1-cont.container-fluid");
      const result = {};

      const type = await newPage.$$eval(
        ".col-xs-12.col-sm-12.col-md-3.col-lg-3.prd1-left.hidden-xs.hidden-sm > .row.left-type > ul > li",
        (els) => {
          let list = [];
          els.forEach((element) => {
            if (element.querySelector("a")?.innerText) {
              list = [
                ...list,
                {
                  title: element.querySelector("a").innerText,
                  href: element.querySelector("a").href,
                  id: element.getAttribute("data-id"),
                },
              ];
            }
          });
          return list;
        }
      );

      const type_item = await newPage.$$eval(
        ".col-xs-12.col-sm-12.col-md-3.col-lg-3.prd1-left.hidden-xs.hidden-sm > .row.left-type-item > .tab-content > .tab-pane",
        (els) => {
          let list = [];
          els.forEach((element) => {
            let items = element.querySelectorAll("ul li");
            for (let i = 0; i < items.length; i++) {
              let item = {
                title: items[i].querySelector("a")?.innerText.trim(),
                id: items[i].getAttribute("data-id"),
              };
              list = [...list, item];
            }
          });
          return list;
        }
      );

      const filter = await newPage.$$eval(
        ".col-xs-12.col-sm-12.col-md-3.col-lg-3.prd1-left.hidden-xs.hidden-sm > .row.left-tree > ul > .first-lvl",
        (els) => {
          filter = els.map((el) => {
            let title = el.querySelector("label")?.innerText;
            let items = el.querySelectorAll(".nav.tree li");
            let options = [];
            if (items.length > 1) {
              for (let i = 0; i < items.length; i++) {
                let item = items[i].querySelector("label").innerText;
                let id = items[i]
                  .querySelector("label input")
                  ?.getAttribute("value");
                options = [
                  ...options,
                  {
                    title: item.replace(/\n/g, "").trim(),
                    id: id,
                  },
                ];
              }
            } else if (items[0].getAttribute("class") === "cb-size") {
              let list = items[0].querySelectorAll("label");
              for (let i = 0; i < list.length; i++) {
                let size = list[i].innerText;
                let id = list[i].querySelector("input")?.getAttribute("value");
                options = [
                  ...options,
                  {
                    title: size.replace(/\n/g, "").trim(),
                    id: id,
                  },
                ];
              }
            } else {
              let list = items[0].querySelectorAll("label");
              for (let i = 0; i < list.length; i++) {
                let color = list[i].querySelector("span").getAttribute("style");
                let id = list[i].querySelector("input")?.getAttribute("value");
                options = [
                  ...options,
                  {
                    title: color,
                    id: id,
                  },
                ];
              }
            }
            return {
              title: title,
              options: options,
            };
          });
          return filter;
        }
      );

      result.type = type;
      result.type_item = type_item;
      result.filter = filter;
      await newPage.close();
      //await browser.close();
      res(result);
    } catch (error) {
      console.log("loi o scraper " + error);
    }
  });

module.exports = scraper_Filter;
