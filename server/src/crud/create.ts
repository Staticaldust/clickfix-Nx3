import { User } from '../models/user';
import { Tp } from '../models/tp';

export const createUser = async () => {
  try {
    await User.create({
      name: 'Test User',
      address: 'Test Address',
      mail_address: 'test@example14.com',
      phone_number: '555-1234',
      password: 'testpassword',
      image:
        'https://media.discordapp.net/attachments/1194572187449958453/1196397224918265886/images.png',
      history: [],
    });
  } catch (error) {
    console.error('Error creating test user:', error);
  }
};

export const createTp = async () => {
  try {
    await Tp.create({
      name: 'Test Tp',
      address: 'Test Address',
      mail_address: 'test@example11.com',
      phone_number: '555-1234',
      password: 'testpassword',
      profession: 'mechanic',
      subSpecialty: 'tiers',
      image:
        'https://media.discordapp.net/attachments/1194572187449958453/1194578607000014900/plumber8.jpg',
      Experience: '3',
      rating: 4,
      about: 'some description...',
      available: true,
    });
  } catch (error) {
    console.error('Error creating test tp:', error);
  }
};
