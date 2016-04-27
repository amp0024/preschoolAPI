exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('classes').del(), 

    // Inserts seed entries
    knex('classes').insert({
      
      name: 'Wednesdays AM', 
      userid: 4


    }),
    knex('classes').insert({
      
      name: 'Wednesdays PM', 
      userid: 5


    }),
    knex('classes').insert({
      
      name: 'Wednesdays AM', 
      userid: 6


    })
  );
};
