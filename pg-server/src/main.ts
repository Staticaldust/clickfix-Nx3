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
