const express = require("express");
const app = express();
const path = require("path");
const proxy = require("http-proxy-middleware");

const port = process.env.PORT || 3000;

app.use(
  "/rooms/:listingId",
  express.static("/rooms/:listingId/", path.join(__dirname, "/../public"))
);

app.use(
  "/rooms/reviews/recent",
  proxy({
    target: "http://bearbnb-reviews-module.us-east-1.elasticbeanstalk.com/",
    changeOrigin: true
  })
);
app.use(
  "/rooms/reviews/relevant",
  proxy({
    target: "http://bearbnb-reviews-module.us-east-1.elasticbeanstalk.com/",
    changeOrigin: true
  })
);
app.use(
  "/rooms/reviews/filter",
  proxy({
    target: "http://bearbnb-reviews-module.us-east-1.elasticbeanstalk.com/",
    changeOrigin: true
  })
);
app.use(
  "/rooms/checkout/:listingId",
  proxy({
    target: "http://checkout-dev.us-east-2.elasticbeanstalk.com/",
    changeOrigin: true
  })
);

app.use(
  "/rooms/bookings/:listingId",
  proxy({
    target: "http://checkout-dev.us-east-2.elasticbeanstalk.com/",
    changeOrigin: true
  })
);

app.use(
  "/rooms/:listingId/images",
  proxy({
    target: "http://bearbnb-photo-module.us-east-2.elasticbeanstalk.com/",
    changeOrigin: true
  })
);

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
