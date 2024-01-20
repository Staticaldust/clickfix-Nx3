import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../sequelize';
export type UserType = {
  user_id: number;
  name: string;
  address: string;
  mail_address: string;
  phone_number: string;
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
      allowNull: false,
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
    mail_address: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    history: {
      type: DataTypes.ARRAY(DataTypes.STRING),
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
    tableName: 'users',
  }
);
