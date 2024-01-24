import { Category } from '../models/category';
import { Tp } from '../models/tp';
import { User } from '../models/user';

export const db = {
  users: {
    getUser: async (id: number) => (await User.findByPk(id)).dataValues,
    getUsers: async () => (await User.findAll()).map((i) => i.dataValues),
    // create: async (data: { name: string }) => {
    //   const user = { id: String(users.length + 1), ...data };
    //   users.push(user);
    //   return user;
    // },
  },
  tps: {
    getTp: async (id: number) => (await Tp.findByPk(id)).dataValues,
    getTps: async () => (await Tp.findAll()).map((i) => i.dataValues),
    // create: async (data: { name: string }) => {
    //   const user = { id: String(users.length + 1), ...data };
    //   users.push(user);
    //   return user;
    // },
  },
  categories: {
    getCategory: async (id: number) => (await Category.findByPk(id)).dataValues,
    getCategories: async () =>
      (await Category.findAll()).map((i) => i.dataValues),
    // create: async (data: { name: string }) => {
    //   const user = { id: String(users.length + 1), ...data };
    //   users.push(user);
    //   return user;
    // },
  },
};
