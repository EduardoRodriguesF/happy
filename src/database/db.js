const Database = require('sqlite-async');

function execute(db) {
    // return para que possamos fazer o debug, já que não aparecem erros no terminal
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)
}

// Pedir para o banco de dados abra o diretório (database) e coloque um arquivo database.sqlite
// Na primeira execução, ela cria. A partir de então, ele apenas abre
// Esta execução é assíncrona naturalmente, ou seja, o código continua rodando mesmo antes de terminar esta linha
// O resultado dessa função será exportado
module.exports = Database.open(__dirname + '/database.sqlite').then(execute);