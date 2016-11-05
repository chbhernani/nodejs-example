module.exports = function(app){
    
    var contatos = app.controllers.contatos;  

    app.get('/contatos', contatos.index);
    app.get('/contatos/:id', contatos.show);
    app.get('/contatos/:id/editar', contatos.edit);
    
    app.post('/contatos', contatos.create);

    app.put('/contatos/:id', contatos.update);

    app.delete('/contatos/:id', contatos.destroy);
};
