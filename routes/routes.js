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

router.post('/AddTodo', (req,res)=>{
    let description = req.body.description;
    let userID = req.user._id;
    User.findById(userID, (err, user)=>{
        if (err) throw err

        user.todos.push({description: description} );

            user.save().then((result)=>{
                console.log('Todo est bien ajouter a la list');
                res.redirect('/')
            }).catch((err)=>{
                console.log(err);
            });

    })
    



})

module.exports = router;

