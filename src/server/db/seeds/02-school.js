
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('schools').del(), 

    // Inserts seed entries
    knex('schools').insert({
      
      name: 'Liberty PreSchool',
      street: '999 S. Denver',
      unit: 'N/A',
      city: 'Greenwood Village',
      state: 'CO',
      zip: '80111',
      info: 'A small school dedicated to building and developing young minds',
      adminid: 1

    }),
    knex('schools').insert({
      
      name: 'Little Hands and Feet',
      street: '313 Freedom Ave',
      unit: '15',
      city: 'Cherry Hills',
      state: 'CO',
      zip: '80113',
      info: 'The premier place for your kids!',
      adminid: 2

    }),
    knex('schools').insert({
      
      name: 'Derrik Zoolander: Center for kids who cant read good and want to learn to do other stuff good too',
      street: '445 Derrik ln',
      unit: '69',
      city: 'New York',
      state: 'New York',
      zip: '11111',
      info: 'A center for kids who want to learn to read and do other stuff good too',
      adminid: 3

    })
   
  );
};


