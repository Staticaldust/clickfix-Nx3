const faker = require('faker');
import { sequelize } from '../seqPG';
import { Tp } from '../models/tp';

let counter = -1;
const randomUrl = () => {
  const url = [
    'https://media.discordapp.net/attachments/1194572187449958453/1194578606190514226/plumber5.jpg',
    'https://media.discordapp.net/attachments/1194572187449958453/1194578606429573180/plumber6.jpg',
    'https://media.discordapp.net/attachments/1194572187449958453/1194578606723182662/plumber7.jpg',
    'https://media.discordapp.net/attachments/1194572187449958453/1194578607000014900/plumber8.jpg',
    'https://media.discordapp.net/attachments/1194572187449958453/1194578607348125727/plumber1.jpg',
    'https://media.discordapp.net/attachments/1194572187449958453/1194578607826284554/plumber2.jpg',
    'https://media.discordapp.net/attachments/1194572187449958453/1194578608434450533/plumber4.jpg',
  ];
  counter++;
  return url[counter];
};

// const generateProfile = () => ({
//   name: faker.name.findName(),
//   address: faker.address.streetAddress(),
//   mail_address: faker.internet.email(),
//   phone_number: faker.phone.phoneNumber(),
//   password: faker.internet.password(),
//   profession: 'plumber',
//   subSpecialty: 'sub-plumber',
//   image: faker.image.avatar(),
// });

// const createProfiles = async () => {
//   await sequelize.sync();

//   const profiles = Array.from({ length: 7 }, () => generateProfile());

//   await Tp.bulkCreate(profiles);

//   console.log('Profiles created and inserted successfully.');
//   await sequelize.close();
// };

// createProfiles();
