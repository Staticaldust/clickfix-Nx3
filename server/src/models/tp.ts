import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../sequelize';

export type TpData = {
  name: string;
  address: string;
  email: string;
  password: string;
  phone: string;
  profession: string;
  subspecialty: string;
  image: string;
  experience: string;
  price_rating: number;
  reliability_rating: number;
  comments: number;
  orders: number;
  history: string[];
  about: string;
  available: boolean;
};
export interface TpType extends TpData {
  tp_id: number;
  createdAt: string;
  updatedAt: string;
}
export const Tp = sequelize.define<Model<TpType, TpData>>(
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
    subspecialty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    experience: {
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
export const createTableTp = async () => {
  try {
    console.log('Creating table tps');
    await Tp.sync({ alter: true });
  } catch (error) {
    console.error(error);
  }
};
export const createTp = async (tpData: TpData) => {
  try {
    const newTp = await Tp.create(tpData);
    console.log('New Tp created:', newTp.toJSON());
    return newTp;
  } catch (error) {
    console.error('Error creating Tp:', error);
    throw error;
  }
};
export const tpDetails: TpData = {
  name: 'ליאור רז',
  address: '5TH avenue',
  email: 'lior@gmail.com',
  password: 'vin',
  phone: '0525381648',
  profession: 'אינסטלציה',
  subspecialty: 'מנועים',
  image:
    'https://media.discordapp.net/attachments/1194572187449958453/1200427786100281534/zTnySRVJBTltaSc9o7NCBZPlTrNxZpj9ok-4CYOGcfDcWQMPqeCpC1Aj_8u9w6KGF5Kgv6c-i6-DPC2028sLI8xrcAvbbUS.png',
  experience: '2',
  price_rating: 2,
  reliability_rating: 5,
  comments: 0,
  orders: 0,
  history: [],
  about: 'מכונאי מורשה, אמין ומהיר',
  available: true,
};
