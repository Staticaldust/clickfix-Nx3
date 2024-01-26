import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../sequelize';
export type CategoryData = {
  name: string;
  image: string;
  video: string;
  entries: number;
};
export interface CategoryType extends CategoryData {
  category_id: number;
  createdAt: string;
  updatedAt: string;
}
export const Category = sequelize.define<Model<CategoryType, CategoryType>>(
  'Category',
  {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    video: {
      type: DataTypes.STRING,
    },
    entries: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('now'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('now'),
    },
  },
  {
    tableName: 'categories',
  }
);
export const createTableCategory = async () => {
  try {
    console.log('Creating table categories');
    await Category.sync({ alter: true });
  } catch (error) {
    console.error(error);
  }
};
export const createCategory = async (categoryData: CategoryData) => {
  try {
    const newCategory = await Category.create(categoryData);
    console.log('New Category created:', newCategory.toJSON());
    return newCategory;
  } catch (error) {
    console.error('Error creating Category:', error);
    throw error;
  }
};
export const categoryDetails: CategoryData = {
  name: 'אלקטרוניקה',
  image:
    'https://media.discordapp.net/attachments/1194572187449958453/1200436416115654676/ai.png',
  video: 'string',
  entries: 0,
};
