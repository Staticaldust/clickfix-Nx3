import express, { Request, Response } from 'express';
import postgraphile from 'postgraphile';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'dotenv/config';

const app = express();
app.use(express.json());
app.use(cors());

const dbConnection = process.env.PG_URI;

app.use(
  postgraphile(dbConnection, 'public', {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    dynamicJson: true,
    classicIds: true,
    jwtSecret: 'some_secret_key_for_token@*987216',
    jwtPgTypeIdentifier: 'public.token',
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`:rocket: Server ready at http://localhost:${PORT}/`);
});
// // Secret key for JWT
// const jwtSecret = 'your-secret-key';

// app.post('/login', async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;

//     // Replace with your actual user authentication logic
//     const user = await authenticateUser(email, password);

//     if (user) {
//       const token = generateToken(user);
//       res.json({ token });
//     } else {
//       res.status(401).json({ error: 'Invalid credentials' });
//     }
//   } catch (error) {
//     console.error('Login Error:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// function authenticateUser(email: string, password: string): Promise<any> {
//   // Replace with your actual user authentication logic (e.g., database query)
//   // This is just a mock function
//   const mockUser = {
//     id: 1,
//     email: 'test@example.com',
//     hashedPassword:
//       '$2b$10$OkgPKL1Z55l9qIqDNLX6QuR1UD21/5W6C9Y7eCxQzZyqyueXD2n3W', // bcrypt hash of 'password'
//   };

//   return new Promise((resolve) => {
//     bcrypt.compare(password, mockUser.hashedPassword, (err, result) => {
//       if (result) {
//         resolve({ id: mockUser.id, email: mockUser.email });
//       } else {
//         resolve(null);
//       }
//     });
//   });
// }

// function generateToken(user: any): string {
//   return jwt.sign({ userId: user.id, userEmail: user.email }, jwtSecret, {
//     expiresIn: '1h',
//   });
// }
