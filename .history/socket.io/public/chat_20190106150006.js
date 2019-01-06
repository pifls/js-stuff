// Make connection
const socket = io.connect('http://localhost:3838');

// Query DOM
let message = document.getElementsByClassName('message');
let handle = document.getElementsByClassName('handle');
let btn = document.getElementsByClassName('send');
let output = document.getElementsByClassName('output');

// Emit events

btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
});

// Listen for events
socket.on('chat', data => {
    output.innerHTML += `<p><strong>${ data.handle }</strong> ${ data.message }</p>`;
})