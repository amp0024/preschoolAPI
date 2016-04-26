
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('guardians').del(), 

    // Inserts seed entries
    knex('guardians').insert({

      firstName: 'Johan', 
      lastName: 'Bach',
      lvlofaccess: 1,
      phone: '303-555-5555',
      email: 'jbach@test.com',
      username: 'jbach',
      password: 'testy'

    }),
    knex('guardians').insert({

      firstName: 'Ludwig', 
      lastName: 'Van Beethoven',
      lvlofaccess: 1,
      phone: '212-444-4444',
      email: 'lbeethoven@test.com',
      username: 'lbeets',
      password: 'Imdeaf' 

    }),
    knex('guardians').insert({

      firstName: 'Wolfgang', 
      lastName: 'Mozart',
      lvlofaccess: 1,
      phone: '415-333-3333',
      email: 'wm@test.com',
      username: 'Mozzy',
      password: 'Iamlike14'

    })
  );
};

