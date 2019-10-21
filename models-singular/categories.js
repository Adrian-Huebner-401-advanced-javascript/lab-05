'use strict';

// Where is our schema defined?
// How do we get it in here so we can run methods on it?
const catSchema = require('./categories-schema');


class Categories {

  constructor() {
  }

  get(_id) {
    // Call the appropriate mongoose method to get
    // one or more records
    // If 1, return it as a plain object
    // If 2, return it as an object like this:
    // { count: ##, results: [{}, {}] }
    if(_id){
      return catSchema.findOne({_id});
    } else {
      return catSchema.find({});
    }
  }

  create(record) {
    // Call the appropriate mongoose method to create a new record
    let newRecord = new catSchema(record);
    return newRecord.save();
  }

  update(_id, record) {
    // Call the appropriate mongoose method to update a record
    return catSchema.findByIdAndUpdate(_id, record, {new : true});
  }

  delete(_id) {
    // Call the appropriate mongoose method to delete a record
    return catSchema.findByIdAndDelete(_id);
  }

}

module.exports = Categories;