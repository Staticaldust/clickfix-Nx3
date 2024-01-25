import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../sequelize';
export type UserType = {
  user_id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
  password: string;
  image: string;
  history: string[];
  createdAt: string;
  updatedAt: string;
};
export const User = sequelize.define<Model<UserType, UserType>>(
  'User',
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    history: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
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
    tableName: 'users',
  }
);

export const createTableUsers = async () => {
  try {
    console.log('Creating table users');
    await User.sync({ alter: true });
  } catch (error) {
    console.error(error);
  }
};
