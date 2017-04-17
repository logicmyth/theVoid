'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const voidText = function () {
  console.log('voidText');
  const text = getFormFields(event.target);
  console.log(text);
};

const addHandlers = function () {
  $('.twitterSubmit').on('click', voidText);
};

module.exports = {
  addHandlers
};
