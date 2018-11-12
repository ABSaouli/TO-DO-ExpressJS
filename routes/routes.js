const router = require("express").Router();
const User = require('../models/users');
 
router.get('/', (req, res)=>{
    let TodoList = req.user.todos;
    console.log(TodoList);
    let todos =   TodoList.filter((todo)=>{
        return !todo.done;
      });
    let doneTodos = TodoList.filter((todo)=>{
        return todo.done;
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

