import app from "./app";

app.listen(app.get("port"), () => {
  console.log("Express na porta", app.get("port"));
  console.log("Express no modo:", app.get("env"));
});
