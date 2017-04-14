'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const voidText = function() {
let text = getFormFields(event.target);

};


const addHandlers() {
  $('.twitter').on('submit', voidText);
}
