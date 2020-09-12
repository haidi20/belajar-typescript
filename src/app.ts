import * as $ from 'jquery';

let age: number = 26;

$(document).ready(function () {
  if (age <= 25) {
    $('#result').html('still young')
  } else {
    $('#result').html('old');
  }
});