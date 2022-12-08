
module.exports = function(app) {

    const UserController = require('../controllers/user');

    //Get All Users.
    app.get('/user/getAll', UserController.user_get_all_user);

    //Create User.
    app.post('/user/create', UserController.user_post_user);

    //Edit User.
    // app.put('/user/edit', UserController.user_edit_user);

    //Delete User.
    app.delete('/user/delete', UserController.user_delete_user);
    
};