const User = require('../models/user');



module.exports = { 
    displayEntries: (_, res) => {
        //lean wandelt mongoose object in normales json um
        User.find().lean()
            .then((result) => {
                res.render('users/display', {users:result})
              
            })
            .catch((err) => {
                console.log(err);
            })
    },
}





