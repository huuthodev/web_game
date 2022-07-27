const sql = require("mssql/msnodesqlv8");
const { config } = require("dotenv");

config();

const dbConfig = {
  user: "THIENTHOLOGIN",
  password: "huutho06",
  server: "localhost",
  database: "CNPM",
  driver: "msnodesqlv8",
};

const connect = new sql.ConnectionPool(dbConfig).connect().then((pool) => {
  console.log("Connect SQL Server successfully!!");
  return pool;
});

module.exports = { connect, sql };

// const mysql = require("mysql");

// const connectDB = mysql.createConnection({
//   host: "localhost",
//   user: "admin",
//   password: "123123",
//   database: "go_game",
// });

// connectDB.connect((err) => {
//   if (err) throw err;
//   console.log("Connect SQL Server successfully!!");
// });

// module.exports = connectDB;
