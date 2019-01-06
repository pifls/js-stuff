// Make connection
const socket = io.connect('http://localhost:3838');

// Query DOM
let message = document.getElementsByClassName('message');
let handle = document.getElementsByClassName('handle');
let btn = document.getElementsByClassName('send');
let output = document.getElementsByClassName('output');