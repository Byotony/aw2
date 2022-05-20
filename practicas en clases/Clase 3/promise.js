// ESTA ES UNA PRACTICA LA CUAL FUE REALIZADA DE FORMA EXTERNA EN UN CURSO DE INTERNET, PARA COMPRENDER MEJOR EL FUNCIONAMIENTO
// DE LAS PROMESAS Y ASÍ TENER UN MEJOR DESEMPEÑO.

function Request(req, res){
    User.findById(red.userId, function(err, user){
        if (err) {
            res.send(err);
        } else{
            Tasks.findById(user.tasksId, function (err, tasks){
                if (err) {
                return res.send(err);
                } else {
                    tasks.completed=true;
                    tasks.save(function (err) {
                        if (err) {
                            return res.send(err)
                        } else{
                            res.send ('Tarea Completada')
                        }
                    })
                }
            })
        }
    })
}

function request(req, res) {
    User.findById(req.userId)
    .then(function(user){
        res.send(user)
    })
    .catch(function(err){
        res.send(err);
    })
}