var socket = io();

export let onChange = callback => socket.on('stock', callback);

export let watch = symbols => socket.emit('join', symbols);

export let unwatch = symbo => socket.emit('leave', symbol);
