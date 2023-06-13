const scraper_Shoe = (browser, url) =>
  new Promise(async (res, reject) => {
    try {
      let newPage = await browser.newPage();
      await newPage.setUserAgent(
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36"
      );
      await newPage.goto(url);
      console.log("vao " + url);
      await newPage.waitForSelector(".row.product-detail-wrapper");
      const shoes = await newPage.$eval(
        ".row.product-detail-main.pr_style_01",
        (el) => {
          let imgs = [];
          for (
            let i = 0;
            i <
            el
              .querySelector(".col-md-5.col-sm-12.col-xs-12")
              .querySelectorAll(
                ".product-gallery .product-image-detail.box__product-gallery.scroll ul .flickity-viewport .flickity-slider li"
              ).length;
            i++
          ) {
            let img = el
              .querySelector(".col-md-5.col-sm-12.col-xs-12")
              .querySelectorAll(
                ".product-gallery .product-image-detail.box__product-gallery.scroll ul .flickity-viewport .flickity-slider li"
              )[i];
            imgs.push({
              src: img.querySelector("a img").src,
              dataid: img.querySelector("a").getAttribute("dataid"),
            });
          }

          let code = el
            .querySelector(".col-md-3.col-sm-12.col-xs-12")
            ?.querySelector(".product-title.hidden-xs")
            ?.querySelector("#pro_sku")
            ?.innerText.replace("SKU: ", "")
            ? el
                .querySelectorAll(".col-md-3.col-sm-12.col-xs-12")[0]
                ?.querySelector(".product-title.hidden-xs")
                ?.querySelector("#pro_sku")
                ?.innerText.replace("SKU: ", "")
            : "null";

          let description = [];

          for (
            let i = 0;
            i <
            el
              .querySelectorAll(".col-md-3.col-sm-12.col-xs-12")[0]
              .querySelectorAll(".product-description")[0]
              .querySelectorAll(".description-content .main_details ul li")
              .length;
            i++
          ) {
            let des = el
              .querySelectorAll(".col-md-3.col-sm-12.col-xs-12")[0]
              .querySelectorAll(".product-description")[0]
              .querySelectorAll(".description-content .main_details ul li")
              [i].querySelector("span")?.innerText;
            description.push(des);
          }

          let guarantee = `
          <ul>
            <li><span style=\"font-size: 9pt;\">Bảo hành trọn đời về các vấn đề bong tróc keo đế.</span></li>
            <li><span style=\"font-size: 9pt;\">Miễn phí 3 lần vệ sinh đánh bóng giày (mang theo thẻ vệ sinh).</span></li>
            <li><span style=\"font-size: 9pt;\">Đổi hàng trong vòng 1 tuần nếu xảy ra vấn đề do nhà sản xuất:</span>
            <ul style=\"list-style-type: circle;\">
              <li><span style=\"font-size: 9pt;\">Đổi hàng trong vòng 1 tuần nếu xảy ra vấn đề do nhà sản xuất.</span></li>
              <li><span style=\"font-size: 9pt;\">Trong trường hợp chưa mang lần nào, nhưng bị vấn đề về đế.</span></li>
            </ul>
            <li><span style=\"font-size: 9pt;\">Mua tại store hỗ trợ đổi hàng trong vòng 24h.</span></li>
          </ul>`;

          let exchange = `				 
          <ul>
            <li><span style=\"font-size: 9pt;\">Hàng phải còn nguyên vẹn không có bất kì sự thay đổi nào.</span></li>
            <li><span style=\"font-size: 9pt;\">Hàng khi đóng gói lại phải kèm túi hộp vẫn còn nguyên vẹn.</span></li>
            <li><span style=\"font-size: 9pt;\">Phải điền đầy đủ thông tin để tránh thất lạc.</span></li>
            <li><span style=\"font-size: 9pt;\">Mọi chi phí vận chuyển đổi size sẽ do bên mua chịu toàn bộ chi phí.</span></li>
          </ul>
          <div><span style=\"font-size: 9pt;\">&nbsp;LƯU Ý: Nếu lỗi nhà cung cấp chúng tôi sẽ chịu hoàn toàn chi phí.</span></div>
          <div><span style=\"font-size: 9pt;\">&nbsp;* Liên hệ trực tiếp với chúng tôi để việc trao đổi trở nên dễ dàng hơn.</span></div>            
        `;

          let discount =
            el
              .querySelector(".col-md-4.col-sm-12.col-xs-12")
              ?.querySelector("form .zzzprice .product-price .pro-sale")
              ?.innerText === undefined
              ? 0
              : el
                  .querySelector(".col-md-4.col-sm-12.col-xs-12")
                  ?.querySelector("form .zzzprice .product-price .pro-sale")
                  ?.innerText.replace("-", "")
                  .replace("%", "");

          let price = el
            .querySelector(".zzzprice")
            .querySelector(".product-price .pro-price")
            ?.innerText.replace("₫", "");

          let colors = {
            title: el.querySelectorAll(
              "form .select-swatch.clearfix #variant-swatch-0 .header"
            )[1]?.innerText
              ? el.querySelectorAll(
                  "form .select-swatch.clearfix #variant-swatch-0 .header"
                )[1]?.innerText
              : "null",
            color: el.querySelectorAll(
              "form .select-swatch.clearfix #variant-swatch-0 .header"
            )[1]
              ? window
                  .getComputedStyle(
                    el.querySelector(
                      "form .select-swatch.clearfix #variant-swatch-0 .select-swap .n-sd.swatch-element.color label span"
                    ),
                    ""
                  )
                  ?.getPropertyValue("background")
                  .slice(0, 18)
              : "null",
          };

          let sizes = el
            .querySelectorAll("form .select.clearfix .selector-wrapper")[1]
            ?.querySelector("span select")
            ?.innerHTML.replaceAll('"', '"')
            ? el
                .querySelectorAll("form .select.clearfix .selector-wrapper")[1]
                ?.querySelector("span select")
                ?.innerHTML.replaceAll('"', '"')
            : "null";

          return {
            imgs: imgs,
            code: code,
            guarantee: guarantee,
            exchange: exchange,
            discount: discount,
            price: price,
            colors: colors,
            sizes: sizes,
          };
        }
      );

      await newPage.close();
      res(shoes);
    } catch (error) {
      console.log("loi o scraper shoe " + error);
    }
  });

module.exports = scraper_Shoe;
