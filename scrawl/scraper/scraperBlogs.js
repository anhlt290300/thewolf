const scraper_Blogs = (browser, url) =>
  new Promise(async (res, reject) => {
    try {
      let newPage = await browser.newPage();
      await newPage.setUserAgent(
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36"
      );
      await newPage.goto(url);
      console.log("vao " + url);

      await newPage.waitForSelector(".row.wrapper-row.pd-page");

      const blogs = await newPage.$$eval(
        ".row.wrapper-row.pd-page > .col-md-9.col-sm-12.col-xs-12 > .blog-content > .list-article-content.blog-posts > .blog-loop",
        (els) => {
            blogs = els.map((el) => {
            let href = el.querySelector(
              ".blog-post.row .col-md-4.col-xs-12.col-sm-12 a"
            ).href;
            let img = el.querySelector(
              ".blog-post.row .col-md-4.col-xs-12.col-sm-12 a img"
            ).src;
            let title = el.querySelector(
              ".blog-post.row .col-md-8.col-xs-12.col-sm-12 .blog-post-title a"
            ).innerText;
            let author = el.querySelector(
              ".blog-post.row .col-md-8.col-xs-12.col-sm-12 .blog-post-meta"
            ).innerText;
            let content_trailer = el.querySelector(
              ".blog-post.row .col-md-8.col-xs-12.col-sm-12 .entry-content"
            ).innerText;
            return {
              href: href,
              img: img,
              title: title,
              author: author,
              content_trailer: content_trailer,
            };
          });
          return blogs;
        }
      );

      //await newPage.close();
      res(blogs);
    } catch (error) {
      console.log("loi o scraper blog " + error);
    }
  });

module.exports = scraper_Blogs;
