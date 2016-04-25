
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('classes').del(), 

    // Inserts seed entries
    knex('classes').insert({
      
      name: 'Wednesdays AM', 
      teacherid: 1


    }),
    knex('classes').insert({
      
      name: 'Wednesdays PM', 
      teacherid: 2


    }),
    knex('classes').insert({
      
      name: 'Wednesdays AM', 
      teacherid: 3


    })
  );
};


