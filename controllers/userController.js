const User = require('../models/user');



module.exports = {
    getUserById: (req, res) => {

        User.findById(req.params.id).lean()
            .then((result) => {
                res.render('users/update', { user: result })
                console.log(result)

            })
            .catch((err) => {
                console.log(err);
            })
    },
    getUser: (req, res) => {
        res.render("users/save", {
            viewTitle: "Benutzer hinzufügen"
        })
    },
    saveUser: (req, res) => {
        let emailFormat = /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;


        if (req.body.firstName == '' || req.body.lastName == '' || req.body.email == '' || req.body.mobile == '') {

            req.session.message = {
                type: 'warning',
                message: 'Bitte füllen Sie die Felder aus!'
            }
            res.redirect('/user');
        } else if (!req.body.email.match(emailFormat)) {
            req.session.message = {
                type: 'warning',
                message: 'Das Email-Format ist nicht korrekt!'
            }
            res.redirect('/user');
        }

        else {
            const user = new User();

            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.email = req.body.email;
            user.mobile = req.body.mobile;
            user.save((err) => {
                if (!err) {
                    req.session.message = {
                        type: 'success',
                        message: 'Benutzer wurde erfolgreich angelegt!'
                    }
                    res.redirect('/user');
                } else {

                }
            });
        }




    },
    updateUser: (req, res) => {
        User.findOneAndUpdate({ _id: req.body._id }, req.body, (err, doc) => {
            let emailFormat = /^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

            if (req.body.firstName == '' || req.body.lastName == '' || req.body.email == '' || req.body.mobile == '') {
                req.session.message = {
                    type: 'warning',
                    message: 'Bitte füllen Sie die Felder aus!'
                }
                res.redirect('/user');
            } else if (!req.body.email.match(emailFormat)) {
                req.session.message = {
                    type: 'warning',
                    message: 'Das Email-Format ist nicht korrekt!'
                }
                res.redirect('/user');
            } else {
                if (!err) {
                    req.session.message = {
                        type: 'info',
                        intro: '',
                        message: 'Benutzer wurde erfolgreich aktualisiert!'
                    }
                    res.redirect('/display');
                } else {
                    console.log(err);
                }
            }

        })
    },
    deleteUser: (req, res) => {
        User.findByIdAndDelete(req.params.id, (err) => {
            if (!err) {
                req.session.message = {
                    type: 'danger',
                    message: 'Ausgewählter Benutzer wurde gelöscht!'
                }
                res.redirect('/display');
            } else {
                console.log(err);
            }
        })
    }
}





