// 'use strict';

// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable('tps', {
//       tp_id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       name: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       address: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       email: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         unique: true,
//       },
//       password: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       phone: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       profession: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       subSpecialty: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       image: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       Experience: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//       },
//       price_rating: {
//         type: Sequelize.INTEGER,
//       },
//       reliability_rating: {
//         type: Sequelize.INTEGER,
//       },
//       comments: {
//         type: Sequelize.INTEGER,
//       },
//       orders: {
//         type: Sequelize.INTEGER,
//       },
//       history: {
//         type: Sequelize.ARRAY(Sequelize.INTEGER),
//       },
//       about: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       available: {
//         type: Sequelize.BOOLEAN,
//         allowNull: false,
//       },
//       createdAt: {
//         type: Sequelize.DATE,
//         allowNull: false,
//         defaultValue: Sequelize.fn('now'),
//       },
//       updatedAt: {
//         type: Sequelize.DATE,
//         allowNull: false,
//         defaultValue: Sequelize.fn('now'),
//       },
//     });
//     await queryInterface.addConstraint('tps', {
//       type: 'foreign key',
//       fields: ['profession'],
//       references: {
//         table: 'categories', // Name of the referenced table (Category)
//         field: 'name', // Name in the referenced table (Category)
//       },
//       onDelete: 'CASCADE',
//       onUpdate: 'CASCADE',
//     });
//   },

//   async down(queryInterface, Sequelize) {
//     await queryInterface.dropTable('tps');
//   },
// };
