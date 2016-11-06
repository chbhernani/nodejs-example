module.exports = function(app){
    
    var contatos = app.controllers.contatos;  
    var autenticar = require('./../middlewares/autenticador');

    app.get('/contatos', autenticar, contatos.index);
    app.get('/contatos/:id', autenticar, contatos.show);
    app.get('/contatos/:id/editar', autenticar, contatos.edit);
    
    app.post('/contatos', autenticar, contatos.create);

    app.put('/contatos/:id', autenticar, contatos.update);

    app.delete('/contatos/:id', autenticar, contatos.destroy);
};
