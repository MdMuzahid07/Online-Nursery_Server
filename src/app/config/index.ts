import dotenv from "dotenv";
// importing path from nodejs, a built in module
import path from "path";

// joining the .env file in current directory ,and setting in path using nodejs path module
dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
};
