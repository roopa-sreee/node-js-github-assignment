//creating express server instance
const express = require("express");
const path = require("path");

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

const app = express();

const dbPath = path.join(__dirname, "issues.db");

let db = null;

//initializing Server
const initializeDBAndServer = async () => {
  try {
    //sqlite open method is used to connect the server and database
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server is Running");
    });
  } catch (error) {
    console.log(`DB Error: ${error.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

//API to get issuesData of a User
app.get("/userId", async (request, response) => {
  const { userId } = request.params;
  const getIssuesQuery = `
    SELECT userId,totalOpenIssues,issuesOpenedInTheDay,issuesOpenedInAWeek,issuesOpenedBeforeAWeek FROM user_issues 
     WHERE userId = ${userId};`;

  const issuesData = await db.get(getIssuesQuery);
  response.send(issuesData);
});

// API to get all issuesData
app.get("open-issues", async (request, response) => {
  const getIssues = `
    SELECT * FROM user_issues;`;

  const data = await db.run(getIssues);
  response.send(data);
});

module.exports = app;
