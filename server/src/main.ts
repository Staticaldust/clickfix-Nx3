// console.log('Hello World');
// import { initTRPC } from "@trpc/server";
// import { createHTTPServer } from "@trpc/server/adapters/standalone";
// import cors from "cors";
// import { z } from "zod";
// import { User } from "./models/user";
// import { sequelize } from "./seqPG";
// import { publicProcedure, router } from "./trpc";
// const t = initTRPC.create();

// const appRouter = router({
//   greeting: publicProcedure
//     .input(
//       z
//         .object({
//           name: z.string().nullish(),
//         })
//         .nullish()
//     )
//     .query(({ input }) => {
//       return {
//         text: `hello ${input?.name ?? "world"}`,
//       };
//     }),
//   userNew: publicProcedure
//     .input(
//       z
//         .object({
//           // email:z .string().nullish(),
//           id: z.number(),
//         })
//         .nullish()
//     )
//     .query(async ({ input }) => {
//       let users: object | unknown;
//       if (input?.id !== undefined) {
//         users = await user(input.id);
//       }
//       return {
//         // text: `your ${input?.email }`,
//         users: users,
//       };
//     }),
// });
// const syncDatabase = async () => {
//   await sequelize.sync({ alter: true });
//   console.log("🍟The table for the User model was just (re)created!");
// };

// const createTestUser = async () => {
//   try {
//      await User.create({
//       name: "Test User",
//       address: "Test Address",
//       mail_address: "test@example11.com",
//       phone_number: "555-1234",
//       password: "testpassword",
//       client: true,
//     });
//   } catch (error) {
//     console.error("Error creating test user:", error);
//   }
// };

// const getUsers = async () => {
//   // Find all users
//   const users = await User.findAll();
//   console.log(users.every((user) => user instanceof User)); // true
//   console.log("All users:", JSON.stringify(users, null, 2));
// };
// const user = async (id: number): Promise<object[] | unknown> => {
//   const user = await User.findByPk(id);
//   if (user === null) {
//     console.log("Not found!");
//   } else {
//     console.log(user instanceof User);
//     return user;
//     // true
//     // Its primary key is 123
//   }
// };

// syncDatabase();
// getUsers();
// // createTestUser();

// createHTTPServer({
//   middleware: cors(),
//   router: appRouter,
//   createContext() {
//     console.log("context 3");
//     return {};
//   },
// }).listen(2022);
// // export type AppRouter = typeof appRouter;
console.log('Hello World');
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import cors from "cors";
import { z } from "zod";
import { User, UserType } from "./models/user";
import { sequelize } from "./seqPG";
import { publicProcedure, router } from "./trpc";


const appRouter = router({
  greeting: publicProcedure
    .input(
      z
        .object({
          name: z.string(),
        })
    )
    .query(({ input }) => {
      const {name} = input
      return {
        text: `hello ${name ?? "world"}`,
      };
    }),
  userNew: publicProcedure
    .input(
      z
        .object({
          id: z.number(),
        })
    )
    .query(async ({ input }) => {
      const {id} = input
      const users = await user(id);
      return users
    }),
});
const syncDatabase = async () => {
  await sequelize.sync({ alter: true });
  console.log("🍟The table for the User model was just (re)created!");
};

const createTestUser = async () => {
  try {
    await User.create({
      name: "Test User",
      address: "Test Address",
      mail_address: "test@example14.com",
      phone_number: "555-1234",
      password: "testpassword",
      client: true,
    });
  } catch (error) {
    console.error("Error creating test user:", error);
  }
};

const getUsers = async () => {
  const users = (await User.findAll()).map((u) => {
    return u.dataValues
  });
  console.log("All users:", JSON.stringify(users, null, 2));
};
const user = async (id: number) => {
  const user = (await User.findByPk(id)).dataValues;
  if (user === null) {
    console.log("Not found!");
  } else {
    // console.log(user instanceof UserType );
    return user;
    // true
    // Its primary key is 123
  }
};

syncDatabase();
getUsers();
// createTestUser();

createHTTPServer({
  middleware: cors(),
  router: appRouter,
  createContext() {
    console.log("context 3");
    return {};
  },
}).listen(2022);
export type AppRouter = typeof appRouter 