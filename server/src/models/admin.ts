import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../sequelize';
export type AdminType = {
  admin_id: number;
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
export const Admin = sequelize.define<Model<AdminType, AdminType>>(
  'Admin',
  {
    admin_id: {
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
    tableName: 'admins',
  }
);
export const createTableAdmin = async () => {
  try {
    console.log('Creating table admins');
    await Admin.sync({ alter: true });
  } catch (error) {
    console.error(error);
  }
};
