var express = require('express');
var router = express.Router();
var queries = require('../db/activities_queries');

// only availible to teachers
//removed ensureAdmin helper
// GET all todos
router.get('/', function(req, res, next) {
  queries.getAll()
  .then(function(todos) {
    res.status(200).json(todos);
  })
  .catch(function(error) {
    next(error);
  });
});

// GET single todo
router.get('/:id', function(req, res, next) {
  queries.getSingle(req.params.id)
  .then(function(todo) {
    res.status(200).json(todo);
  })
  .catch(function(error) {
    next(error);
  });
});

// add todo
router.post('/', function(req, res, next) {
// console.log(req.body.studentid);
//   if(req.body.studentid === '*'){
//     console.log(all);
//   } else {
//     console.log(single);
//   }
  req.body.startTime = req.body.startTime.toString();
  req.body.endTime = req.body.endTime.toString();

  console.log(req.body);
  queries.add(req.body)
  .then(function(todoID) {
    queries.getSingle(todoID)
    .then(function(todo) {
      res.status(200).json(todo);
    })
    .catch(function(error) {
      next(error);
    });
  })
  .catch(function(error) {
    next(error);
  });
});

// update todo
router.put('/:id', function(req, res, next) {
  if(req.body.hasOwnProperty('id')) {
    return res.status(422).json({
      error: 'You cannot update the id field'
    });
  }
  queries.update(req.params.id, req.body)
  .then(function() {
    queries.getSingle(req.params.id)
    .then(function(todo) {
      res.status(200).json(todo);
    })
    .catch(function(error) {
      next(error);
    });
  }).catch(function(error) {
    next(error);
  });
});

// delete todo
router.delete('/:id', function(req, res, next) {
  queries.getSingle(req.params.id)
  .then(function(todo) {
    queries.deleteItem(req.params.id)
    .then(function() {
      res.status(200).json(todo);
    })
    .catch(function(error) {
      next(error);
    });
  }).catch(function(error) {
    next(error);
  });
});


module.exports = router;
