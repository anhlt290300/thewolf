const scraper_Blog = (browser, url) =>
  new Promise(async (res, reject) => {
    try {
      let newPage = await browser.newPage();
      await newPage.setUserAgent(
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36"
      );
      await newPage.goto(url);
      console.log("vao " + url);

      await newPage.waitForSelector(".col-md-9.col-sm-12.col-xs-12");

      const blogs = await newPage.$eval(
        ".col-md-9.col-sm-12.col-xs-12 > .content-page > .article-content > .article-pages",
        (el) => el.innerHTML
      );

      await newPage.close();
      res({
        content: blogs,
      });
    } catch (error) {
      console.log("loi o scraper blog " + error);
    }
  });

module.exports = scraper_Blog;
