const Categories = require('../../models-singular/categories.js');
let categories = new Categories();

//const supergoose = require('../supergoose.js');

describe('Categories Model (Singular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new category', () => {
    let newCategory = {name: 'Test', description: 'This is a test Category'};
    categories.create(newCategory)
      .then((result) => {
        expect(result.name).toEqual('Test');
      });
  });

  it('can get() a category', () => {
    categories.get()
      .then(results => {
        expect(results.length);
      });
  });

  it('can get() all categories', () => {
  });

  it('can update() a category', () => {
  });

  it('can delete() a category', () => {
  });

});