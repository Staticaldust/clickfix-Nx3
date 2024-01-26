import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../sequelize';

export interface AdminData {
  name: string;
  address: string;
  email: string;
  phone: string;
  password: string;
  image?: string;
  history?: string[];
}

export interface AdminType extends AdminData {
  admin_id: number;
  createdAt: string;
  updatedAt: string;
}

export const Admin = sequelize.define<Model<AdminType, AdminData>>(
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

export const createAdmin = async (adminData: AdminData) => {
  try {
    const newAdmin = await Admin.create(adminData);
    console.log('New admin created:', newAdmin.toJSON());
    return newAdmin;
  } catch (error) {
    console.error('Error creating admin:', error);
    throw error;
  }
};
export const adminDetails: AdminData = {
  name: 'ישי פור',
  address: 'הפסגה 12',
  email: '8429693@gmail.com',
  phone: '0525381648',
  password: 'passwordishay',
};
