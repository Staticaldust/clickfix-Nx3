// 'use strict';

// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable('categories', {
//       category_id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       name: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         unique: true,
//       },
//       image: {
//         type: Sequelize.STRING,
//         allowNull: false,
//       },
//       video: {
//         type: Sequelize.STRING,
//       },
//       entries: {
//         type: Sequelize.INTEGER,
//         allowNull: true,
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
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.dropTable('categories');
//   },
// };
