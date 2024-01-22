import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../sequelize';
export type CategoryType = {
  category_id: number;
  name: string;
  image: string;
  video: string;
  entries: number;
  createdAt: string;
  updatedAt: string;
};
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
