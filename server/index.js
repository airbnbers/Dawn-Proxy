const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const proxy = require("http-proxy-middleware");
app.use(express.static(path.join(__dirname, "/../public")));

app.use(
  "/rooms/reviews/recent",
  proxy({
    target: "http://127.0.0.1:3001",
    changeOrigin: true
  })
);
app.use(
  "/rooms/reviews/relevant",
  proxy({
    target: "http://127.0.0.1:3001",
    changeOrigin: true
  })
);
app.use(
  "/rooms/reviews/filter",
  proxy({
    target: "http://127.0.0.1:3001",
    changeOrigin: true
  })
);
app.use(
  "/rooms/1",
  proxy({
    target: "http://127.0.0.1:3002",
    changeOrigin: true
  })
);

app.use(
  "/rooms/bookings/1",
  proxy({
    target: "http://127.0.0.1:3002",
    changeOrigin: true
  })
);

app.use(
  "/rooms/1/images",
  proxy({
    target: "http://127.0.0.1:3003",
    changeOrigin: true
  })
);

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
