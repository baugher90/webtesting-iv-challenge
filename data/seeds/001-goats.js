exports.seed = function(knex, Promise) {
  return knex('goats').insert([
    { name: 'Alfrod Bagget' },
    { name: 'Samwich Hamgee' },
    { name: 'Meriadoc Brandybuck' },
    { name: 'Peregrin Took' },
    { name: 'Mithrandir' },
    { name: 'Boromir' },
    { name: 'Legolas' },
    { name: 'Gimli' },
    { name: 'Aragorn' },
  ]);
};
