const router = require("express").Router();
const User = require('../models/users');
 
router.get('/', (req, res)=>{
    let todolist =  req.body.todos;
    todolist.find({}).then((reslt)=>{
        let todos = reslt.filter((todo)=>{
            return !todo.done;
        })
        let doneTodos = reslt.filter(todo=>{
            return todo.done;
        })
    });
    res.render('indexUser', {todos: todos, doneTodos: doneTodos});
});

router.post('/newuser', (req, res)=>{
    let user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        Email: req.body.email,
        password: req.body.password
    });

    user.save().then(()=> {
        res.redirect('/login');
        console.log('add user succes');
    }).catch(()=>{
        console.log("error d'enrigestrement user");
    });
});

module.exports = router;

