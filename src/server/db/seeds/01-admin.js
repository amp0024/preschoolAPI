
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('admins').del(), 

    // Inserts seed entries
    knex('admins').insert({
      username: 'SMcmahon',
      password: 'asbestos',
      firstName: 'Shirley',
      lastName: 'McMahon',
      lvlofaccess: 3,
      email: 'Shirley.mcmahon@test.com'
    }),

  knex('admins').insert({
      username: 'jbardem',
      password: 'sicario',
      firstName: 'Javier',
      lastName: 'Bardem',
      lvlofaccess: 3,
      email: 'j.bardem@test.com'
    }),
  knex('admins').insert({
      username: 'Mcfattits',
      password: 'datblubba',
      firstName: 'Eustace',
      lastName: 'McFattits',
      alvlofaccess: 3,
      email: 'Mcfattits@test.com'
    })
  );
};
