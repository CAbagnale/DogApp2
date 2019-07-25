'use strict';

function getDogImage() {
  let quantity = isInteger();
  fetch(`https://dog.ceo/api/breeds/image/random/${quantity}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  let quantity = isInteger();
  for (let i = 0; i < quantity; i++) {
    $('#images').append(`<img src="${responseJson.message[i]}" class="results-img">`);
    console.log(responseJson.message[i]);
  }
  $('.results').removeClass('hidden');
  console.log('the above ' + quantity + ' dog pics are displayed.');
}

function isInteger() {
  let number = parseInt($("input[name='quantity']").val(), 10);
  if (number === parseInt(number, 10)) {
    return number;
  }
  else {
    return 3;
  };
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    $('#images').html('');
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});