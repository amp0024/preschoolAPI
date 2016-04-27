exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(), 

    // Inserts seed entries
    knex('users').insert({
      password: 'asbestos',
      email: 'Shirley.mcmahon@test.com',      
      firstName: 'Shirley',
      lastName: 'McMahon',
      phone: '666-666-6666',
      street: '999 S. Denver',
      unit: 'N/A',
      city: 'Greenwood Village',
      state: 'CO',
      zip: '80111',
      schoolid: 1,
      role: 'admin',
      image: 'asdf'
      
    }),

  knex('users').insert({
      password: 'bond',
      email: 'j.bardem@test.com',      
      firstName: 'Javier',
      lastName: 'Bardem',
      phone: '777-777-7777',
      street: '313 Freedom Ave',
      unit: '15',
      city: 'Cherry Hills',
      state: 'CO',
      zip: '80113',
      schoolid: 2,
      role: 'admin',
      image: 'asdf'

    }),
  knex('users').insert({
      password: 'datblubba',
      email: 'fattymcgoo@paddys.com',      
      firstName: 'Fatty',
      lastName: 'McGoo',
      phone: '888-888-8888',
      street: '445 Derrik ln',
      unit: '69',
      city: 'New York',
      state: 'New York',
      zip: '11111',
      schoolid: 3,
      role: 'admin',
      image: 'asdf'

    }),
  knex('users').insert({
      password: 'farts',
      email: 'gstaci@test.com',      
      firstName: 'Gwen',
      lastName: 'Staci',
      phone: '666-666-6666',
      street: '999 S. Denver',
      unit: 'N/A',
      city: 'Greenwood Village',
      state: 'CO',
      zip: '80111',
      schoolid: 1,
      role: 'teacher',
      image: 'asdf'

    }),
    
    knex('users').insert({
      password: 'spidey',
      email: 'pparker@test.com',      
      firstName: 'Peter',
      lastName: 'Parker',
      phone: '777-777-7777',
      street: '313 Freedom Ave',
      unit: '15',
      city: 'Cherry Hills',
      state: 'CO',
      zip: '80113',
      schoolid: 2,
      role: 'teacher',
      image: 'asdf'

    }),
    
    knex('users').insert({
      password: 'twoface',
      email: 'hdent@test.com',      
      firstName: 'Harvey',
      lastName: 'Dent',
      phone: '888-888-8888',
      street: '445 Derrik ln',
      unit: '69',
      city: 'New York',
      state: 'New York',
      zip: '11111',
      schoolid: 3,
      role: 'teacher',
      image: 'asdf'

    }),
    knex('users').insert({
      password: 'testy',
      email: 'jbach@test.com',      
      firstName: 'Johan',
      lastName: 'Bach',
      phone: '111-111-1111',
      street: '543 Whatever LN.',
      unit: '2',
      city: 'Durango',
      state: 'CO',
      zip: '80823',
      schoolid: 1,
      role: 'guardian',
      image: 'asdf'

    }),
    knex('users').insert({
      password: 'imdeaf',
      email: 'lbeethoven@test.com',      
      firstName: 'Ludwig',
      lastName: 'Van Beethoven',
      phone: '222-222-2222',
      street: '123 Icanthearyou ave.',
      unit: 'NA',
      city: 'Greenwood Village',
      state: 'CO',
      zip: '80111',
      schoolid: 2,
      role: 'guardian',
      image: 'asdf'
      
    }),
    knex('users').insert({
      password: 'iamlike14',
      email: 'wm@test.com',      
      firstName: 'Wolfgang',
      lastName: 'Mozart',
      phone: '333-333-3333',
      street: '6543 fuckthis Ct.',
      unit: '69',
      city: 'Imdone',
      state: 'AK',
      zip: '43121',
      schoolid: 3,
      role: 'guardian',
      image: 'asdf'

    })
  );
};