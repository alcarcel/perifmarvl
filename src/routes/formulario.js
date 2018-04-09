const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('marvel', ['users']);

//Obtener Todos los datos de la tabla consultada
router.get('/', (req,res,next)=>{
    db.users.find((err,users)=>{
        if (err) return next(err);
            res.json(users);
    });    
});

//Obtener UN dato de la base MONGODB
router.get('/:id', (req,res,next)=>{
    db.users.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, user)=>{
        if (err) return next(err);
            res.json(user);
    });    
});

//Guardar UN dato de MONGODB
router.post('/', (req, res, next)=>{
    const user = req.body;
    if(!user.title || !(user.isDone + '')){
        res.status(400).json({
            error: 'Datos No recibidos'
        });
    } else {
        db.users.save(usuario, (err, user)=>{
            if(err) return next(err);
            res.json(user);
        });
    }
});

//eliminar
router.delete('/:id', (req,res,next)=>{
    db.users.remove({_id: mongojs.ObjectId(req.params.id)}, (err, result)=>{
        if (err) return next(err);
            res.json(result);
    });    
});


module.exports = router;