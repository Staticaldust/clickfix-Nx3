'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create the 'tp' table
    await queryInterface.createTable('tp', {
      tp_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mail_address: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      phone_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      profession: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      subSpecialty: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Experience: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      about: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      available: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
      },
    });

    const demoTpUsers = [
      {
        name: 'Tp1',
        address: 'TpAddress1',
        mail_address: 'tp1@example.com',
        phone_number: '1234567890',
        password: 'tppassword1',
        profession: 'Plumber',
        subSpecialty: 'Cardiologist',
        image:
          'https://media.discordapp.net/attachments/1194572187449958453/1194578607000014900/plumber8.jpg',
        Experience: '5 years',
        rating: 4,
        about: 'Experienced Cardiologist',
        available: true,
      },
      {
        name: 'Tp2',
        address: 'TpAddress2',
        mail_address: 'tp2@example.com',
        phone_number: '2345678901',
        password: 'tppassword2',
        profession: 'Plumber',
        subSpecialty: 'Orthopedic Surgeon',
        image:
          'https://media.discordapp.net/attachments/1194572187449958453/1194578607000014900/plumber8.jpg',
        Experience: '8 years',
        rating: 5,
        about: 'Skilled Orthopedic Surgeon',
        available: true,
      },
      {
        name: 'Tp3',
        address: 'TpAddress3',
        mail_address: 'tp3@example.com',
        phone_number: '3456789012',
        password: 'tppassword3',
        profession: 'Plumber',
        subSpecialty: 'Pediatric Nurse',
        image:
          'https://media.discordapp.net/attachments/1194572187449958453/1194578607000014900/plumber8.jpg',
        Experience: '7 years',
        rating: 4,
        about: 'Compassionate Pediatric Nurse',
        available: true,
      },
      {
        name: 'Tp4',
        address: 'TpAddress4',
        mail_address: 'tp4@example.com',
        phone_number: '4567890123',
        password: 'tppassword4',
        profession: 'Plumber',
        subSpecialty: 'Dermatologist',
        image:
          'https://media.discordapp.net/attachments/1194572187449958453/1194578607000014900/plumber8.jpg',
        Experience: '6 years',
        rating: 4,
        about: 'Specialized Dermatologist',
        available: true,
      },
      {
        name: 'Tp5',
        address: 'TpAddress5',
        mail_address: 'tp5@example.com',
        phone_number: '5678901234',
        password: 'tppassword5',
        profession: 'Plumber',
        subSpecialty: 'Physical Therapist',
        image:
          'https://media.discordapp.net/attachments/1194572187449958453/1194578607000014900/plumber8.jpg',
        Experience: '9 years',
        rating: 5,
        about: 'Expert Physical Therapist',
        available: true,
      },
      {
        name: 'Tp6',
        address: 'TpAddress6',
        mail_address: 'tp6@example.com',
        phone_number: '6789012345',
        password: 'tppassword6',
        profession: 'Plumber',
        subSpecialty: 'Emergency Nurse',
        image:
          'https://media.discordapp.net/attachments/1194572187449958453/1194578607000014900/plumber8.jpg',
        Experience: '5 years',
        rating: 4,
        about: 'Quick-response Emergency Nurse',
        available: true,
      },
    ];

    await queryInterface.bulkInsert('tp', demoTpUsers, {});

    return Promise.resolve();
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tp');

    return Promise.resolve();
  },
};
