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
        type: Sequelize.INTEGER, // Use INTEGER instead of NUMBER
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

    // Insert demo Tp users
    const demoTpUsers = [
      {
        name: 'Tp1',
        address: 'TpAddress1',
        mail_address: 'tp1@example.com',
        phone_number: '1234567890',
        password: 'tppassword1',
        profession: 'Doctor',
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
        phone_number: '1234567891',
        password: 'tppassword2',
        profession: 'Doctor',
        subSpecialty: 'Cardiologist',
        image:
          'https://media.discordapp.net/attachments/1194572187449958453/1194578607000014900/plumber8.jpg',
        Experience: '5 years',
        rating: 4,
        about: 'Experienced Cardiologist',
        available: true,
      },
      {
        name: 'Tp3',
        address: 'TpAddress3',
        mail_address: 'tp3@example.com',
        phone_number: '1234567892',
        password: 'tppassword3',
        profession: 'Doctor',
        subSpecialty: 'Cardiologist',
        image:
          'https://media.discordapp.net/attachments/1194572187449958453/1194578607000014900/plumber8.jpg',
        Experience: '5 years',
        rating: 4,
        about: 'Experienced Cardiologist',
        available: true,
      },
      {
        name: 'Tp4',
        address: 'TpAddress4',
        mail_address: 'tp4@example.com',
        phone_number: '1234567893',
        password: 'tppassword4',
        profession: 'Doctor',
        subSpecialty: 'Cardiologist',
        image:
          'https://media.discordapp.net/attachments/1194572187449958453/1194578607000014900/plumber8.jpg',
        Experience: '5 years',
        rating: 4,
        about: 'Experienced Cardiologist',
        available: true,
      },
      // Add 6 more demo Tp users with similar structure
      // ...
    ];

    await queryInterface.bulkInsert('tp', demoTpUsers, {});

    // Add any additional logic you need for the migration

    return Promise.resolve();
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the 'tp' table
    await queryInterface.dropTable('tp');

    // Add any additional logic you need for rollback

    return Promise.resolve();
  },
};
