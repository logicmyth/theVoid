'use strict'
//
const getFormFields = require('../../../lib/get-form-fields')

const voidText = function () {
  // console.log('voidText')
  const text = getFormFields(event.target)
  // console.log(text)
  // console.log(text)
  // $('.twitter').addClass('floating')
  console.log($('.twitter').text())
}

const nameInput = document.getElementById('voidTwitter')
document.querySelector('form.pure-form').addEventListener('submit', function (e) {

    // prevent the normal submission of the form
  e.preventDefault()

  console.log(nameInput.value.charAt(2))
  const text = getFormFields(event.target)
  // console.log($("#floatDiv").text());
  // $('.twitter').text.addClass('floating')

   console.log($('form.pure-form input'.value))
  // console.log($('form.pure-form input'))
})

$('form.pure-form').on('submit', function (e) {
  e.preventDefault()
  $('form.pure-form input').css('color', 'red')
  $('form.pure-form input'[0].value).addClass('floating')
})

const addHandlers = function () {
  $('.twitterSubmit').on('click', voidText)
}

module.exports = {
  addHandlers
}
