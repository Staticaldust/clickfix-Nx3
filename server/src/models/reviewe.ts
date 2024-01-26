import { DataTypes, Model, Sequelize } from 'sequelize';
import { sequelize } from '../sequelize';
import { User } from './user';
import { Tp } from './tp';
export type ReviewData = {
  tp_id: number;
  user_id: number;
  price_rating: number;
  reliability_rating: number;
  comment: string;
  image: string;
};
export interface ReviewType extends ReviewData {
  review_id: number;
  createdAt: string;
  updatedAt: string;
}

export const Review = sequelize.define<Model<ReviewType, ReviewData>>(
  'Review',
  {
    review_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tp_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price_rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reliability_rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
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
    tableName: 'reviews',
  }
);
export const createTableReview = async () => {
  try {
    console.log('Creating table reviews');
    await Review.sync({ alter: true });
  } catch (error) {
    console.error(error);
  }
};
