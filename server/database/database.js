import mongoose from "mongoose";
import { print, OutputType } from "../src/helps/print.js";
import Exception from "../src/exception/exceptions.js";
mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    let connection = await mongoose.connect(
      "mongodb+srv://admin:0918806450@cluster0.oo9mk1h.mongodb.net/thewolf?retryWrites=true&w=majority"
    );
    print("Connect mongoose successfully", OutputType.SUCCESS);
    return connection;
  } catch (error) {
    const { code } = error;
    if (error.code == 8000) {
      throw new Exception(Exception.WRONG_DB_USERNAME_PASSWORD);
    } else if (code == "ENOTFOUND") {
      throw new Exception(Exception.WRONG_CONNECTION_STRING);
    }

    throw new Exception(Exception.CANNOT_CONNECT_MONGODB);
  }
};

export default connect;
