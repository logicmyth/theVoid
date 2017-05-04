'use strict'
//
const getFormFields = require('../../../lib/get-form-fields')

const voidText = function () {
  // console.log('voidText')
  const text = getFormFields(event.target)
  // console.log(text)
  console.log(text)
  $(':text').addClass('floating')
}

const nameInput = document.getElementById('voidTwitter')
document.querySelector('form.pure-form').addEventListener('submit', function (e) {

    // prevent the normal submission of the form
  e.preventDefault()

  console.log(nameInput.value.charAt(2))
  const text = getFormFields(event.target)
  console.log($("#floatDiv").text());
  $('.twitter').text.addClass('floating')
})

const floatText = function () {

}

const addHandlers = function () {
  $('.twitterSubmit').on('click', voidText)
}

module.exports = {
  addHandlers
}
