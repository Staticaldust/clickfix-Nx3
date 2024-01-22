// 'use strict';

// module.exports = {
//   async up(queryInterface, Sequelize) {
//     await queryInterface.createTable('reviews', {
//       review_id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       tp_id: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//       },
//       user_id: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//         // Add foreign key constraint if necessary
//       },
//       price_rating: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//       },
//       reliability_rating: {
//         type: Sequelize.INTEGER,
//         allowNull: false,
//       },
//       comment: {
//         type: Sequelize.STRING,
//       },
//       image: {
//         type: Sequelize.STRING,
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

//     await queryInterface.addConstraint('reviews', {
//       type: 'foreign key',
//       fields: ['tp_id'],
//       references: {
//         table: 'tps',
//         field: 'tp_id',
//       },
//       onDelete: 'CASCADE',
//       onUpdate: 'CASCADE',
//     });

//     await queryInterface.addConstraint('reviews', {
//       type: 'foreign key',
//       fields: ['user_id'],
//       references: {
//         table: 'users',
//         field: 'user_id',
//       },
//       onDelete: 'CASCADE',
//       onUpdate: 'CASCADE',
//     });
//   },
//   async down(queryInterface, Sequelize) {
//     await queryInterface.removeConstraint('reviews', 'reviews_tp_id_tps_fk');
//     await queryInterface.dropTable('reviews');
//   },
// };
