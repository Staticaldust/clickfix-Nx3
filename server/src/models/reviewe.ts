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

export const createReview = async (reviewData: ReviewData) => {
  try {
    const newReview = await Review.create(reviewData);
    console.log('New Review created:', newReview.toJSON());
    return newReview;
  } catch (error) {
    console.error('Error creating Review:', error);
    throw error;
  }
};
export const ReviewDetails: ReviewData = {
  tp_id: 1,
  user_id: 1,
  price_rating: 1,
  reliability_rating: 1,
  comment: '',
  image: '',
};
const tpIds = [
  1, 2, 3, 4, 5, 7, 9, 10, 11, 13, 15, 16, 20, 21, 22, 23, 24, 28, 30, 31, 32,
  33, 34, 35, 39, 40, 42, 43, 44, 45, 46, 47, 48, 50, 53, 55, 57, 59, 61, 63,
  65, 66, 68, 70, 71, 72, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 87,
  88, 89, 90, 91, 92, 93, 94, 96, 97, 99, 101, 104, 106, 107, 108, 109, 110,
  111, 112, 113, 114, 115,
];
const statements = [
  'איש מקצוע אמין ונחמד, אני ממש מרוצה',
  'עבודה ערבית, לא הגיע בזמן, לא אזמין אותו להבא',
  'השירות היה מעולה, אשמח להמליץ עליו',
  'שירות לקוח גרוע, לא ממליץ עליו בכלל',
  'הייתה חוויה נהדרת, תודה רבה',
  'שירות מעולה, נעים לעבוד איתו',
  'אני מרוצה מאוד מהשירות, אחזור שוב בשמחה',
  'מקצועיות מופלאה, אשמח לעבוד שוב',
  'התנהלות יעילה ומקצועית, אני מרוצה מאוד',
  'התנהלות לא כזו של איש אמין, אין לי אמון בו',
  'הייתה פגישה מוצלחת מאוד, תודה רבה',
  'לא מרוצה מהשירות, לא אחזור שוב',
  'קיבלתי שירות מצוין, איש נחמד מאוד',
  'איש מקצוע אמין ואדיב, אני מרוצה מאוד',
  'איש מקצוע אמין ונחמד, אני ממש מרוצה',
  'עבודה ערבית, לא הגיע בזמן, לא אזמין אותו להבא',
  'השירות היה מעולה, אשמח להמליץ עליו',
  'שירות לקוח גרוע, לא ממליץ עליו בכלל',
  'הייתה חוויה נהדרת, תודה רבה',
  'היה תקלה רצינית, לא מתקנים כראוי',
  'מקצועיות מופלאה, אשמח לעבוד שוב',
  'התנהלות יעילה ומקצועית, אני מרוצה מאוד',
  'התנהלות לא כזו של איש אמין, אין לי אמון בו',
  'הייתה פגישה מוצלחת מאוד, תודה רבה',
  'שירות מעולה, נעים לעבוד איתו',
  'אני מרוצה מאוד מהשירות, אחזור שוב בשמחה',
  'לא מרוצה מהשירות, לא אחזור שוב',
  'קיבלתי שירות מצוין, איש נחמד מאוד',
  'איש מקצוע אמין ואדיב, אני מרוצה מאוד',
  'איש מקצוע אמין ונחמד, אני ממש מרוצה',
  'עבודה ערבית, לא הגיע בזמן, לא אזמין אותו להבא',
  'השירות היה מעולה, אשמח להמליץ עליו',
  'שירות לקוח גרוע, לא ממליץ עליו בכלל',
  'הייתה חוויה נהדרת, תודה רבה',
  'היה תקלה רצינית, לא מתקנים כראוי',
  'מקצועיות מופלאה, אשמח לעבוד שוב',
  'התנהלות יעילה ומקצועית, אני מרוצה מאוד',
  'התנהלות לא כזו של איש אמין, אין לי אמון בו',
  'הייתה פגישה מוצלחת מאוד, תודה רבה',
  'שירות מעולה, נעים לעבוד איתו',
  'אני מרוצה מאוד מהשירות, אחזור שוב בשמחה',
  'לא מרוצה מהשירות, לא אחזור שוב',
  'קיבלתי שירות מצוין, איש נחמד מאוד',
  'איש מקצוע אמין ואדיב, אני מרוצה מאוד',
  'איש מקצוע אמין ונחמד, אני ממש מרוצה',
  'עבודה ערבית, לא הגיע בזמן, לא אזמין אותו להבא',
  'השירות היה מעולה, אשמח להמליץ עליו',
  'שירות לקוח גרוע, לא ממליץ עליו בכלל',
  'הייתה חוויה נהדרת, תודה רבה',
  'היה תקלה רצינית, לא מתקנים כראוי',
  'מקצועיות מופלאה, אשמח לעבוד שוב',
  'התנהלות יעילה ומקצועית, אני מרוצה מאוד',
  'התנהלות לא כזו של איש אמין, אין לי אמון בו',
  'הייתה פגישה מוצלחת מאוד, תודה רבה',
  'שירות מעולה, נעים לעבוד איתו',
  'אני מרוצה מאוד מהשירות, אחזור שוב בשמחה',
  'לא מרוצה מהשירות, לא אחזור שוב',
  'קיבלתי שירות מצוין, איש נחמד מאוד',
  'איש מקצוע אמין ואדיב, אני מרוצה מאוד',
  'איש מקצוע אמין ונחמד, אני ממש מרוצה',
  'עבודה ערבית, לא הגיע בזמן, לא אזמין אותו להבא',
  'השירות היה מעולה, אשמח להמליץ עליו',
  'שירות לקוח גרוע, לא ממליץ עליו בכלל',
  'הייתה חוויה נהדרת, תודה רבה',
  'היה תקלה רצינית, לא מתקנים כראוי',
  'מקצועיות מופלאה, אשמח לעבוד שוב',
  'התנהלות יעילה ומקצועית, אני מרוצה מאוד',
  'התנהלות לא כזו של איש אמין, אין לי אמון בו',
  'הייתה פגישה מוצלחת מאוד, תודה רבה',
  'שירות מעולה, נעים לעבוד איתו',
  'אני מרוצה מאוד מהשירות, אחזור שוב בשמחה',
  'לא מרוצה מהשירות, לא אחזור שוב',
  'קיבלתי שירות מצוין, איש נחמד מאוד',
  'איש מקצוע אמין ואדיב, אני מרוצה מאוד',
  'איש מקצוע אמין ונחמד, אני ממש מרוצה',
  'עבודה ערבית, לא הגיע בזמן, לא אזמין אותו להבא',
  'השירות היה מעולה, אשמח להמליץ עליו',
  'שירות לקוח גרוע, לא ממליץ עליו בכלל',
  'הייתה חוויה נהדרת, תודה רבה',
  'היה תקלה רצינית, לא מתקנים כראוי',
];
const userarray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const allReviews = [];
function generateReviews() {
  userarray.forEach((user, userIndex) =>
    tpIds.forEach((tpId) => {
      const review: ReviewData = {
        tp_id: tpId,
        user_id: user,
        price_rating: getRandomRating(),
        reliability_rating: getRandomRating(),
        comment: statements[userIndex],
        image: ' ',
      };
      createReview(review);
    })
  );
}
function getRandomRating() {
  return Math.floor(Math.random() * 5) + 1;
}
for (let i = 0; i < 10; i++) {
  getRandomRating();
}
//generateReviews();
