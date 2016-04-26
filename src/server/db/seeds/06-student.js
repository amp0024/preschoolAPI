
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('students').del(), 

    // Inserts seed entries
    knex('students').insert({

      firstName: 'Robby', 
      lastName: 'Gaines',
      email: 'rgaines@test.com',
      image: 'asdf',
      classid: 1,
      guardianid: 1 


    }),
     knex('students').insert({

      firstName: 'Tyler', 
      lastName: 'Rozboril',
      email: 'trozboril@test.com',
      image: 'asdf',
      classid: 2,
      guardianid:  2


    }), 
     knex('students').insert({

      firstName: 'Adam', 
      lastName: 'Poulson',
      email: 'apoulson@test.com',
      image: 'asdf',
      classid: 3,
      guardianid: 3


    })
  );
};


