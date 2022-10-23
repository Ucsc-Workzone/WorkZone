const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const loginRoute = require("./routes/auth");
const testRoute = require("./routes/project");
const leaveRoute = require("./routes/Leave");
const proRoute = require("./routes/project");
const MemberRoutes = require("./routes/Member");
const RegisterRoutes = require("./routes/Register");
const NotificationRoutes = require("./routes/notificationRoute");

const cors = require("cors");
require("dotenv").config();

const cookieParser = require("cookie-parser");

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/auth", loginRoute);
app.use("/api/notification", NotificationRoutes);
app.use("/api/leave", leaveRoute);
app.use("/api/member", MemberRoutes);
app.use("/api/project", testRoute);
app.use("/api/register", RegisterRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000");
});
