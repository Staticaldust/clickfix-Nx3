import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import { Category } from './models/category';
import { User } from './models/user';
import { Tp } from './models/tp';
export const envConfig = dotenv.config();

export const PG_URI = process.env.PG_URI!;
export const sequelize = new Sequelize(PG_URI, {
  dialect: 'postgres',
  define: {
    timestamps: false,
  },
  logging: console.log,
});

export const syncDatabase = async () => {
  try {
    console.log('Attempting to synchronize database...');
    await sequelize.sync();
    console.log('Database synchronized');
  } catch (error) {
    console.error('Error synch db:', error, error.stack);
  }
};
sequelize
  .sync({ force: true })
  .then(() => {
    console.log('Tables have been created successfully.');
  })
  .catch((error) => {
    console.error('Error creating tables:', error);
  });
