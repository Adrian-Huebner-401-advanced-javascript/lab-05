'use strict';

const mongoose = require('mongoose');

// Require your model
const SingularCategories = require('./models-singular/categories');

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb://localhost:27017/class05';

// Connect
mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true });

// Do some work
let singularCategories = new SingularCategories;

const doData = async() => {
  let sampleCategories = {
    name: 'Clothing',
    description: 'All the clothes we sell',
  };

  let newCategories = await singularCategories.create(sampleCategories);
  console.log('Category Created', newCategories);

  let allCategories = await singularCategories.get();
  console.log('All Categories', allCategories);
};

// Disconnect
mongoose.disconnect();

doData();