import { Category } from '../models/category';
import { Review } from '../models/reviewe';
import { Tp } from '../models/tp';
import { User, UserData } from '../models/user';

export const db = {
  users: {
    getUser: async (id: number) => (await User.findByPk(id)).dataValues,
    getUsers: async () => (await User.findAll()).map((i) => i.dataValues),
    createUser,
  },
  tps: {
    getTp: async (id: number) => (await Tp.findByPk(id)).dataValues,
    getTps: async () => (await Tp.findAll()).map((i) => i.dataValues),
  },
  categories: {
    getCategory: async (id: number) => (await Category.findByPk(id)).dataValues,
    getCategories: async () =>
      (await Category.findAll()).map((i) => i.dataValues),
  },
  reviews: {
    getReview: async (id: number) => (await Review.findByPk(id)).dataValues,
    getReviews: async () => (await Review.findAll()).map((i) => i.dataValues),
  },
};
export async function createUser(userData: UserData) {
  try {
    const newUser = await User.create(userData);
    console.log('New User created:', newUser.toJSON());
    return newUser;
  } catch (error) {
    console.error('Error creating User:', error);
    throw error;
  }
}
