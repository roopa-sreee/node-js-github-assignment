# git hub assignment

Given an `app.js` file and a database file `issues.db`.

Create a table with the name `user` with the following columns,

**user**

| Column   | Type    |
| -------- | ------- |
| id       | INTEGER |
| username | CHAR    |

Create a table with the name `user_issues` with the following columns,

**userIssues**

| Column | Type |

|username | CHAR |
|userId | INT |
|totalOpenIssues|INT |
|issuesOpenedInTheDay | INT |
|issuesOpenedInAWeek |INT |
|issuesOpenedBeforeAWeek |INT |

and write APIs to perform operations on the table `user-issues`,

### API 1

#### Path: `/userId/`

### Response

"{
userId:1000,
totalOpenIssues : 15,
issuesOpenedInTheDay : 4,
issuesOpenedInAWeek : 5,
issuesOpenedBeforeAWeek : 11
}"

### API 2

### path: `/open-issues/`

### Response

[
{
userId:1000,
totalOpenIssues : 15,
issuesOpenedInTheDay : 4,
issuesOpenedInAWeek : 5,
issuesOpenedBeforeAWeek : 11
},
{
userId:1001,
totalOpenIssues : 10,
issuesOpenedInTheDay : 2,
issuesOpenedInAWeek : 5,
issuesOpenedBeforeAWeek : 3
}
]

**Export the express instance using the default export syntax.**

**Use Common JS module syntax.**
