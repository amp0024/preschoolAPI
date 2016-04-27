
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('activities').del(), 

    // Inserts seed entries
    knex('activities').insert({

      name: 'Reading', 
      startTime: '11:50',
      finishTime: '12:00',
      description: 'They read go dog go',
      type: 'education',
      studentid: 1

    }),
    knex('activities').insert({

      name: 'Napping', 
      startTime: '11:00',
      finishTime: '11:30',
      description: 'he slept',
      type: 'rest',
      studentid: 2

    }),
    knex('activities').insert({

      name: 'Lunch', 
      startTime: '1:00',
      finishTime: '1:30',
      description: 'that kid loves his tator tots',
      type: 'eating',
      studentid: 3

    })
  );
};


