'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('dishes',[{
      name: "Indomie",
      vendor_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Indomie kuah",
      vendor_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Spaghetti Lasagna",
      vendor_id: 50,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('dishes', null, {});
  }
};
