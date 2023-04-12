require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const sequelize = require("./util/database");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => {
  res.send("Hello World!!!");
});

app.use("/users", userRoute);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

const PORT = process.env.PORT || 5000;

const init = async () => {
  try {
    console.log("... connecting to db");
    await sequelize.sync({ force: true });
    console.log("db connected");

    console.log("... connecting to server");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("DB Error=====> ", error);
  }
};

init();
