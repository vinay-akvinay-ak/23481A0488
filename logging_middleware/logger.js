const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ2aW5heWFrZ291ZGthc2FuaUBnbWFpbC5jb20iLCJleHAiOjE3NzgzMDk1MzYsImlhdCI6MTc3ODMwODYzNiwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImQ4MWMxY2UwLTQ5ZDktNDQ3Yy1iN2NiLTFjYzQ2Nzc1N2VhYiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Imthc2FuaSB2aW5heWFrIGdvdWQiLCJzdWIiOiJlNjI1NmNmYy03YTZkLTQzZDktODU0Mi1mYmU4MjJjYTY2ODUifSwiZW1haWwiOiJ2aW5heWFrZ291ZGthc2FuaUBnbWFpbC5jb20iLCJuYW1lIjoia2FzYW5pIHZpbmF5YWsgZ291ZCIsInJvbGxObyI6IjIzNDgxYTA0ODgiLCJhY2Nlc3NDb2RlIjoiZUpkQ3VDIiwiY2xpZW50SUQiOiJlNjI1NmNmYy03YTZkLTQzZDktODU0Mi1mYmU4MjJjYTY2ODUiLCJjbGllbnRTZWNyZXQiOiJzVXNhenhqZUNTYUFUWGdRIn0.DCh-HCrVKoPsxmoSmwHcp9i7Xtx0zmuCehSwQAwTEiA";

async function Log(stack, level, pkg, message) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack: stack,
        level: level,
        package: pkg,
        message: message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Log Success");
    console.log(response.data);

  } catch (error) {

    console.log("Log Error");

    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}

Log(
  "backend",
  "error",
  "handler",
  "received string, expected bool"
);