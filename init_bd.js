var knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: ".data/magistrats.sqlite3"
    },
    debug: true,
  useNullAsDefault: true
});

async function init() {
  await knex.schema.dropTableIfExists('magistrats');

  await knex.schema.createTable('magistrats', (table) => {
    table.string('prenom');
    table.string('nom');
    table.string('sexe');
    
    table.primary(['prenom', 'nom']);
  });
  
  await knex.destroy();
}
init();