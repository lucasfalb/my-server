import mongoose from "mongoose";
import config from "../config/database";

class Database {
  constructor() {
    this.connect();
  }
  async connect() {
    try {
      await mongoose.connect(config.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to database");
    } catch (error) {
      console.error(`Database connection error: ${error}`);
    }
  }
}

export default new Database();
