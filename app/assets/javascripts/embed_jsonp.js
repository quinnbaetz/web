<!-- This partial bundles the embed HTML as JSONP. -->

helpful_embed.jsonpReturned(
  { html: '\
    <div id="helpful-embed-html">\
      <article class="helpful-embed">\
          <header>\
              <div class="user-image">\
                  <img src="/assets/operator.jpg" width="86" height="86" alt="Alison the Helpful" />\
              </div>\
              <!-- Commented out because the ratings didn\'t make much sense -->\
              <!-- <ul class="user-ratings">\
                  <li class="user-rating">\
                      <a href="#">G</a>\
                  </li>\
                  <li class="user-rating">\
                      <a href="#">B</a>\
                  </li>\
              </ul> -->\
              <p class="intro">\
                  Hi, I&rsquo;m Alison.<br />\
                  I&rsquo;m here to be helpful.\
              </p>\
          </header>\
          <form action="">\
              <div class="question-container">\
                  <label for="question" class="hidden">Your question</label>\
                  <textarea name="question" id="question" cols="10" rows="3" placeholder="Write your question or feedback here"></textarea>\
              </div>\
              <div class="button-container">\
                  <input type="submit" class="btn" value="Next" />\
              </div>\
          </form>\
          <footer>\
              <p class="footer-links">\
                  <a href="#">Contact us</a>\
                  <a href="#">Support</a>\
              </p>\
              <span class="footer-tagline"><a href="#">Helpful.io</a> by <a href="#">Assembly</a></span>\
          </footer>\
      </article>\
    </div>\
  '
  }
)
