import express from 'express';
import postgraphile from 'postgraphile';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(express.json());
app.use(cors());

const dbConnection = process.env.PG_URI;
const jwtSecret = process.env.JWT_SECRET;

app.use(
  postgraphile(dbConnection, 'public', {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    dynamicJson: true,
    classicIds: true,
    jwtSecret: jwtSecret,
    jwtPgTypeIdentifier: 'public.token',
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`:rocket: Server ready at http://localhost:${PORT}/`);
});

fetch('http://localhost:3000/graphql', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: `{"query":"query MyQuery {\n  allUsers {\n    edges {\n      node {\n        id\n        name\n        password\n        phone\n        updatedAt\n        userId\n        image\n        history\n        email\n        createdAt\n        address\n      }\n    }\n  }\n}\n","variables":{"input":{"email":"8429693@gmail.com","password":"passwordishay"}},"operationName":"MyQuery"}`,
}).then(console.log);
