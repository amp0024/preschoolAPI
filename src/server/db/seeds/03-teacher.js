
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('teachers').del(), 

    // Inserts seed entries
    knex('teachers').insert({
      username: 'gwen', 
      password: 'farts',
      lvlofaccess: 2,
      firstName: 'Gwen',
      lastName: 'Staci',
      email: 'gstaci@test.com',
      image: 'adsf',
      schoolid: 1


    }),
    
    knex('teachers').insert({
      username: 'pparker', 
      password: 'spidey',
      lvlofaccess: 2,
      firstName: 'Peter',
      lastName: 'Parker',
      email: 'pparker@test.com',
      image: 'asdf',
      schoolid: 2



    }),
    
    knex('teachers').insert({
      username: 'hdent', 
      password: 'twoface',
      lvlofaccess: 2,
      firstName: 'Harvey',
      lastName: 'Dent',
      email: 'hdent@test.com',
      image: 'asdf',
      schoolid: 3



    })
  );
};

