const { io } = require('../index');

io.on('connection', client => {

    console.log('Nuevo Dispositivo Conectado');

    client.on('disconnect', () => {
        console.log('Dispositivo Desconectado');
    });

    client.on('emitir-llamado-estudiante', (payload) => {
        client.broadcast.emit('nuevo-llamado-estudiante', payload);
    });

});