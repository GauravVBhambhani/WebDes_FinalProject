
module.exports = function(app) {

    const UserController = require('../controllers/user');

    //Get All Users.
    app.get('/user/getAll', UserController.get_all_diary);

    //Create User.
    app.post('/user/create', UserController.post_diary);

    //Edit User.
    // app.put('/user/edit', UserController.user_edit_user);

    //Delete User.
    app.delete('/user/delete', UserController.delete_diary);
    
};