const Express = require("express");
const Router = require("./routes");

const app = Express();
app.use(Express.json());
app.use("/api", Router);
app.listen(8000, () => {
  console.log("Running application on port 8000");
});
