
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
      email: 'Shirley.mcmahon@test.com'
    }),

  knex('admins').insert({
      username: 'jbardem',
      password: 'sicario',
      firstName: 'Javier',
      lastName: 'Bardem',
      email: 'j.bardem@test.com'
    }),
  knex('admins').insert({
      username: 'Mcfattits',
      password: 'datblubba',
      firstName: 'Eustace',
      lastName: 'McFattits',
      email: 'Mcfattits@test.com'
    })
  );
};
