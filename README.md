# Consulting Associate-2021-Online-Coding-Assessment

Please read through below instructions before starting the assessment. You will be given **2-hour** (20 Mar 2021 (Saturday) at 9:00 a.m. - 11:00 a.m. (HK Time)) for completing the assessment.


## 1. Software Requirements
- NPM version 6.14.4 above (Package Manager)
- Node JS version 10.19.0 above (Runtime Environment)
- Windows 10 OS, or Mac OS with version 10.14 or later

## 2. Setup
### 2.1 Before Start
Download the source code in this repository and run below command under the root directory to install the dependency.

```
npm install
```

### 2.2 Backend Application

server.js is the entry point the backend application, other backend related coding logic is placed under folder `server/`

Start the backend application with the command below.
```
node server.js
```

### 2.3 Frontend Application

All the frontend coding logic is placed under the folder `src/`

Start the frontend application in development mode with the command below
```
npm run start
```
Goto http://localhost:3000/ through web browser, you should see a store website now.

### 2.4 Database

A SQLite file-based database named `shop.db` is placed under `server/db/` folder. You are expected to use the provided client based on your OS (Window 10, MacOS) to connect to the database by executing below command

Window
```
server/db/sqlite3-window
```

MacOS
```
server/db/sqlite3-macos
```

To open the provided database in the CLI
```
> .open shop.db
```

Tips: 
| command | description |
| ------ | ------ |
| .table | List the existing table in databse after connected |
| .schema {Table} | Look up the table schema |

Note that you may need to search other necessary commands for the assessment.

## 3. Assessment

Imagine that you are a technology consultant, and you are working on a demo of an e-commerce B2C online website project. The first version of the prototype is implemented, but there are some comments given by the project's partner after he/she reviewed your demo and re-examine the client's requirements. Please find the questions as below.

1. Since the client has recently decided to re-brand its company, please help change the store name from "IBM Shop" to "International Online Mall" (Suggested time: 5 Minutes)

2. It is found that some obsoleted products are displayed on the home page unexpectedly. You have to

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.1. Client would like to perform an **one-off** clean-up action to remove some obsoleted products on home page, but at the same time keep the obsoleted product data in the product table for future reference. Please help update the database schema to add a column to support mark obsoleted. (Suggested time: 10 Minutes)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.2 Mark product data in database which fulfills the following criteria as **OBSOLETED**, and also update the server API SQL query to return non-obsoleted product only. (Suggested time: 15 Minutes)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - A product will be treated as **OBSOLETED** when the `type` is **B** and `price` is higher than **$20** at this moment.

3. Partner would like you to integrate the membership listing page with server data through API (Note that only listing feature is required. Add-to-cart or purchase feature of membership are not needed). The API should support filtering by `grade`. (Suggested time: 30 Minutes)

4. Your team lead reported an issue on shopping cart page (http://localhost:3000/cart). The behaviour is not expected when adding two exact same products into the shopping cart. You have a gut feeling that this is caused by backend server-side issue(s). Please investigate and fix it. (Suggested time: 45 Minutes)

5. Short essay: Please provide comments on the UI/UX of this website. Any suggestions to improve its UI/UX? Please submit the answer in the Google form below.

**You are allowed to make any reasonable assumptions for the assessment, if any. Please add an 'assumption.txt' text file under root directory of the project if so.**


## 4. Submission

Check in the entire source code together with your answer to **master branch of your own repository (i.e., Either GitLab (https://gitlab.com/) or GitHub (https://github.com/))** and submit the link of your own repository via below Google Form. 
https://docs.google.com/forms/d/e/1FAIpQLSefoNZPVTw2Lpxd22SOO6l83DFOjWcXo5p5vJKvnGysRszhJw/viewform

You are expected to configure your own repository properly such that IBM recruitment team to access it and download the code for evaluation purpose.

Also please find the following example URL format:
- Valid repository URL format example: https://gitlab.com/John_Chan/example-repo
- Valid repository URL format example: https://github.com/John_Chan/example-repo
- Invalid repository URL format example: https://gitlab.com/John_Chan/example-repo/-/tree/my-branch


N.B.1: You are expected to commit your code to your own repository before 20 Mar 2021 (Saturday) 11:00 a.m. (HK Time), and to submit Google Form before 20 Mar 2021 (Saturday) 12:00 n.n. (HK Time). Late submission will not be considered.

N.B.2: You should not have duplicated submission. If so, IBM recruitment team will take the first submission as the final version.

