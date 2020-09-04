import * as $ from 'jquery';

let name: string = "My Name is Haidi.";
let age: number = 23;
let ListFriends: string = '';
let myFriends:[string, number] []= [
  ["Adhi", 24],
  ["Andi", 20],
  ["Risky", 22],
];

$(document).ready(function () {
  $('#name').html(name);
  $('#age').html(`My age is ${age} Years old.`);

  myFriends.map(item => {
    ListFriends += `<li>Name : ${item[0]} and Age : ${item[1]} </li>`;
  });

  $('#myFriends').html(ListFriends);
});