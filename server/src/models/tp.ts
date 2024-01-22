import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../sequelize';

export type TpType = {
  tp_id: number;
  name: string;
  address: string;
  email: string;
  password: string;
  phone: string;
  profession: string;
  subSpecialty: string;
  image: string;
  Experience: string;
  price_rating: number;
  reliability_rating: number;
  comments: number;
  orders: number;
  history: string[];
  about: string;
  available: boolean;
  createdAt: string;
  updatedAt: string;
};
export const Tp = sequelize.define<Model<TpType, TpType>>(
  'Tp',
  {
    tp_id: {
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
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profession: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subSpecialty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Experience: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price_rating: {
      type: DataTypes.INTEGER,
    },
    reliability_rating: {
      type: DataTypes.INTEGER,
    },
    comments: {
      type: DataTypes.INTEGER,
    },
    orders: {
      type: DataTypes.INTEGER,
    },
    history: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    about: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
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
    tableName: 'tps',
  }
);
