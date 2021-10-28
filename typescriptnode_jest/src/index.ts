import app from "./app";
import { connect } from "mongoose";

async function main() {
  try {
    const urlMongoDB = process.env.MONGO_URL || "mongodb://localhost:27017/";
    await connect(urlMongoDB);
    console.log("Conectado ao MongoDB");
    app.listen(app.get("port"), () => {
      console.log("Express na porta:", app.get("port"));
      console.log("Express no modo:", app.get("env"));
    });
  } catch (error) {
    console.log("Erro ao iniciar o servidor", error);
  }
}

main();
