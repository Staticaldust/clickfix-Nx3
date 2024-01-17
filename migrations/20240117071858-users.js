'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create the 'users' table
    await queryInterface.createTable('users', {
      user_id: {
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
      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      history: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
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

    const demoUsers = [
      {
        name: 'User1',
        address: 'Address1',
        mail_address: 'user1@example.com',
        phone_number: '1234567890',
        password: 'password1',
        image:
          'https://media.discordapp.net/attachments/1194572187449958453/1196397224918265886/images.png',
        history: ['Event1', 'Event2'],
      },
      {
        name: 'User2',
        address: 'Address2',
        mail_address: 'user2@example.com',
        phone_number: '2345678901',
        password: 'password2',
        image:
          'https://media.discordapp.net/attachments/1194572187449958453/1196397224918265886/images.png',
        history: ['Event3', 'Event4'],
      },
      {
        name: 'User3',
        address: 'Address3',
        mail_address: 'user3@example.com',
        phone_number: '3456789012',
        password: 'password3',
        image:
          'https://media.discordapp.net/attachments/1194572187449958453/1196397224918265886/images.png',
        history: ['Event3', 'Event4'],
      },
      {
        name: 'User4',
        address: 'Address4',
        mail_address: 'user4@example.com',
        phone_number: '4567890123',
        password: 'password4',
        image:
          'https://media.discordapp.net/attachments/1194572187449958453/1196397224918265886/images.png',
        history: ['Event3', 'Event4'],
      },
      {
        name: 'User5',
        address: 'Address5',
        mail_address: 'user5@example.com',
        phone_number: '5678901234',
        password: 'password5',
        image:
          'https://media.discordapp.net/attachments/1194572187449958453/1196397224918265886/images.png',
        history: ['Event3', 'Event4'],
      },
      {
        name: 'User6',
        address: 'Address6',
        mail_address: 'user6@example.com',
        phone_number: '6789012345',
        password: 'password6',
        image:
          'https://media.discordapp.net/attachments/1194572187449958453/1196397224918265886/images.png',
        history: ['Event3', 'Event4'],
      },
      {
        name: 'User7',
        address: 'Address7',
        mail_address: 'user7@example.com',
        phone_number: '7890123456',
        password: 'password7',
        image:
          'https://media.discordapp.net/attachments/1194572187449958453/1196397224918265886/images.png',
        history: ['Event3', 'Event4'],
      },
    ];

    await queryInterface.bulkInsert('users', demoUsers, {});

    // Add any additional logic you need for the migration

    return Promise.resolve();
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the 'users' table
    await queryInterface.dropTable('users');

    // Add any additional logic you need for rollback

    return Promise.resolve();
  },
};
