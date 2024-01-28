import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../sequelize';
export type UserData = {
  name: string;
  address: string;
  email: string;
  phone: string;
  password: string;
  image: string;
  history: string[];
};
export interface UserType extends UserData {
  user_id: number;
  createdAt: string;
  updatedAt: string;
}
export const User = sequelize.define<Model<UserType, UserData>>(
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

export const createUser = async (userData: UserData) => {
  try {
    const newUser = await User.create(userData);
    console.log('New User created:', newUser.toJSON());
    return newUser;
  } catch (error) {
    console.error('Error creating User:', error);
    throw error;
  }
};
export const UserDetails: UserData[] = [
  {
    name: 'יוסף כהן',
    address: 'אגריפס 5',
    email: 'jo@gmail.com',
    phone: '0525381648',
    password: 'passwordusers',
    image:
      'https://media.discordapp.net/attachments/1194572187449958453/1200925918542184489/AI-Profile-Picture.png',
    history: [],
  },
  {
    name: 'דוד כהן',
    address: 'אגריפס 6',
    email: 'da@gmail.com',
    phone: '0525381648',
    password: 'passwordusers',
    image:
      'https://media.discordapp.net/attachments/1194572187449958453/1200926045059174420/FjU2lkcWYAgNG6d.png',
    history: [],
  },
  {
    name: 'שרה לוי',
    address: 'אגריפס 7',
    email: 'sa@gmail.com',
    phone: '0525381648',
    password: 'passwordusers',
    image:
      'https://media.discordapp.net/attachments/1194572187449958453/1200925967397425262/AI-Profile-Picture.png',
    history: [],
  },
  {
    name: 'מירי כהנא',
    address: 'אגריפס 8',
    email: 'miri@gmail.com',
    phone: '0525381648',
    password: 'passwordusers',
    image:
      'https://media.discordapp.net/attachments/1194572187449958453/1200926111253667892/AI-3D-Female-Profile-Picture.png',
    history: [],
  },
  {
    name: 'אברהם מלכה',
    address: 'אגריפס 9',
    email: 'avii@gmail.com',
    phone: '0525381648',
    password: 'passwordusers',
    image:
      'https://media.discordapp.net/attachments/1194572187449958453/1200926253419593868/ai-generated-7751688_1280.png',
    history: [],
  },
  {
    name: 'רחל בן חיים',
    address: 'אגריפס 10',
    email: 'rachel@gmail.com',
    phone: '0525381648',
    password: 'passwordusers',
    image:
      'https://media.discordapp.net/attachments/1194572187449958453/1200926733617086624/make-ai-generated-images-with-midjourney-ai-artist-ai-art-ai-image-generator.png',
    history: [],
  },
  {
    name: 'יעקב גולן',
    address: 'אגריפס 11',
    email: 'jackobb@gmail.com',
    phone: '0525381648',
    password: 'passwordusers',
    image:
      'https://media.discordapp.net/attachments/1194572187449958453/1200926414606696508/FgdvHifakAAjT-a.png',
    history: [],
  },
  {
    name: 'רבקה כהן',
    address: 'אגריפס 12',
    email: 'riki@gmail.com',
    phone: '0525381648',
    password: 'passwordusers',
    image:
      'https://media.discordapp.net/attachments/1194572187449958453/1200926691825025195/img_171.png',
    history: [],
  },
  {
    name: 'משה בן שמעון',
    address: 'אגריפס 13',
    email: 'moshee@gmail.com',
    phone: '0525381648',
    password: 'passwordusers',
    image:
      'https://media.discordapp.net/attachments/1194572187449958453/1200926480750887043/ai-generated-7751691_1280.png',
    history: [],
  },
  {
    name: 'רות וייס',
    address: 'אגריפס 14',
    email: 'ruth@gmail.com',
    phone: '0525381648',
    password: 'passwordusers',
    image:
      'https://media.discordapp.net/attachments/1194572187449958453/1200926589123317832/63aa06fbc75050bbbb012eb4_Screenshot202022-12-2620at2012.png',
    history: [],
  },
];
