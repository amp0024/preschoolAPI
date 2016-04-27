var express = require('express');
var router = express.Router();

var knex = require('../db/knex');
// var queries = require('../db/queries');
var helpers = require('../lib/helpers');


// router.post('/login', function(req, res, next) {
//   passport.authenticate('local', function(err, user) {
//     if (err) {
//       req.flash('messages', {
//         status: 'danger',
//         value: 'Incorrect email and/or password.'
//       });
//       return res.redirect('/auth/login');
//     } else {
//       req.logIn(user, function(err) {
//         if (err) {
//           return next(err);
//         } else {
//           req.flash('messages', {
//             status: 'success',
//             value: 'Welcome!'
//           });
//           res.redirect(req.session.returnTo || '/');
//           delete req.session.returnTo;
//         }
//       });
//     }
//   })(req, res, next);
// });

router.post('/register', helepers.ensureAdmin, function(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  var role = req.body.role;
  var phone = req.body.phone;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var schoolid = req.body.schoolID;
  var image = req.body.image;
  knex('users').where('email', email)
    .then(function(data) {
      if(data.length) {
        return res.status(409).json({
          status: 'fail',
          message: 'Email already exists'
        });
      } else {
        var hashedPassword = helpers.hashing(password);
        knex('users')
        .returning('*')
        .insert({
          email: email,
          password: hashedPassword,
          role: role,
          phone: phone,
          firstName: firstName,
          lastName: lastName,
          schoolid: schoolid,
          image: image
        })
        .then(function(data) {
          var token = generateToken(user);
          delete user.password;
          res.status(200).json({
            status: 'success',
            data: {
              token: token,
              user: user
            }
          });
        })
        .catch(function(err) {
          return next(err);
        });
      }
    })
    .catch(function(err){
      return next(err);
    });
});


// if (process.env.NODE_ENV === 'development') {
//   router.get('/make-admin', helpers.ensureAuthenticated,
//     function(req, res, next) {
//     queries.makeAdmin(req.user.id)
//     .then(function(books){
//       req.flash('messages', {
//         status: 'success',
//         value: 'You are now an admin!'
//       });
//       res.redirect('/');
//     })
//     .catch(function(err){
//       return next(err);
//     });
//   });
// }


module.exports = router;