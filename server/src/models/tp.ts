import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../seqPG';
export type TpType = {
  tp_id: number;
  name: string;
  address: string;
  mail_address: string;
  phone_number: string;
  password: string;
  profession: string;
  subSpecialty: string;
  image: string;
  Experience: string;
  rating: number;
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
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.NUMBER,
      allowNull: false,
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
    tableName: 'tp',
  }
);
