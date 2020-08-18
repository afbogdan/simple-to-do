# Overall

This project is not currently deployed!
You can run it on your local machine if you follow the instructions bellow in regards to how to configure the database, the server-side and the client-side.

## Database
1. Download and install PostgreSQL (https://www.postgresql.org/)
2. Create a `todo` database
3. In the `todo` database, under the public schemas, create a `todos` table.

| id            | title         | description   | deadline   | is_done      |
| --------------|:-------------:|:-------------:|:----------:|:------------:|
| serial PK NN  | charvar NN    | charvar       | date NN    | boolean NN   |

`PK` = Primary Key;
`NN` = NOT NULL;

## Server-side

In the *server* directory, you must:

1. `npm install` to install server dependecies
2. Create in the server directory a `.env` file containing the following:

```
DB_HOST=localhost
DB_USER=YOUR_USER
DB_PASSWORD=YOUR_PASSWORD
```

where `YOUR_USER` and `YOUR_PASSWORD` should be replaced with the user you created when you installed PostgreSQL.

3. Start the server using `npm run server`.

## Client-side

In the *client* directory, you must:
1. Run `npm install` to install client dependecies
2. Run `npm run start` to start the client.
3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


This part was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
