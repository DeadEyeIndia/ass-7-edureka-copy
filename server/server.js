const app = require("./app");
const connectDB = require("./config/dbConfig");

// Config
const PORT = 3010;

// DB connect
connectDB();

// Listen
app.listen(PORT, () => {
  console.log(`Server is listening on => http://localhost:${PORT}`);
});
