const Categories = require('../../models-singular/categories.js');
let categories = new Categories();

//const supergoose = require('../supergoose.js');

describe('Categories Model (Singular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new category', () => {
    let newCat = { name: 'Clothing', description: 'All the clothes that we sell'};
    return categories.create(newCat)
      .then(record => {
        Object.keys(newCat).forEach(key => {
          expect(record[key]).toEqual(newCat[key]);
        });
      });
  });

  it('can get() a category', () => {
    let newCat = { name: 'Clothing', description: 'All the clothes that we sell'};
    return categories.create(newCat)
      .then(record => {
        return categories.get(record._id)
          .then(catergories => {
            Object.keys(newCat).forEach(key => {
              expect(categories[0][key]).toEqual(categories[key]);
            });
          });
      });
  });

  it('can get() all categories', () => {
  });

  it('can update() a category', () => {
  });

  it('can delete() a category', () => {
  });

});