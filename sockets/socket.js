const { io } = require('../index');

io.on('connection', client => {

    console.log('Nuevo Dispositivo Conectado');

    client.on('disconnect', () => {
        console.log('Dispositivo Desconectado');
    });

    client.on('mensaje', (payload) => {
        console.log('mensaje', payload);

        io.emit('mensaje', { admin: 'Nuevo Mensaje' });

    });

});